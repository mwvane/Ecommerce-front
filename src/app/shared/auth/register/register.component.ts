import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormHelper } from 'src/app/helpers/formHelper';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.minLength(2), this.noSpaceAllowed()]),
    lastname: new FormControl(null, [Validators.required, Validators.minLength(2), this.noSpaceAllowed()]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      this.contains(new RegExp(/[A-Z]/), "capitalLetter"),
      this.contains(new RegExp(/[0-9]/), "number")]),
    confirmPassword: new FormControl(null, [Validators.required, this.confirmPassword()]),
    // birthDate: new FormControl(),
    // unId: new FormControl(null, [Validators.required, this.length(11)]),// პირდი ნომერი
    // image: new FormControl(),
    phone: new FormControl(),
  })

  constructor(public modalService: ModalService, private http: HttpClient) { }

  onSubmit() {
    console.log(this.registerForm.value);
    this.http.post<any>("http://localhost:3000/user", this.registerForm.value).subscribe(data => {
      if(data.status === "Error"){
        alert(data.message);
      }
    })
  }

  onClose() {
    this.modalService.registerModal = false
    this.registerForm.reset()

  }

  get firstname() {
    return this.registerForm.get("firstname")
  }

  // validators
  noSpaceAllowed() {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value.indexOf(' ') != -1) {
        return { noSpaceAllowed: true }
      }
      return null
    }
  }

  length(number: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value.toString().length != number) {
        return { length: true }
      }
      return null
    }
  }

  contains(reg: RegExp, errorName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && !reg.test(control.value)) {
        let obj: any = {}
        obj[errorName] = true
        return obj
      }
      return null
    }
  }

  confirmPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value && control.value != this.registerForm.value.password) {
        return { confirmPassword: true }
      }
      return null
    }
  }

  onLogin(){
    this.modalService.registerModal = false;
    this.modalService.loginModal = true;
  }

}
