import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuItems = StaticFiles.userMenu

  constructor(private modalService: ModalService) { }

  onLogin() {
    this.modalService.loginModal = true
  }
}
