import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  registerModal: boolean = false
  loginModal: boolean = false

  constructor() { }
}
