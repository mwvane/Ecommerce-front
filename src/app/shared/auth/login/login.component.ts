import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    rememberMe: new FormControl(),
  });

  constructor(public modalService: ModalService, private http: HttpClient) { }

  onSubmit(){
    console.log(this.loginForm.value)
    this.http.post<any>("http://localhost:3000/auth/login", this.loginForm.value).subscribe(data => {
      if(data.status === "Error"){
        alert(data.message);
      }
    })
  }
  
  onClose(){
    this.modalService.loginModal = false
    this.loginForm.reset()
  }

  onRegister(){
    this.modalService.loginModal = false
    this.modalService.registerModal = true
  }
  
  onGoogle(){
    alert("google")
  }

  onFacebook(){
    alert("facebook")
  }
}
