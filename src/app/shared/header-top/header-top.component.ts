import { Component, Input, OnInit, Output } from '@angular/core';
import { Isocial } from 'src/app/models/social';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent {
  
  @Input() headerText: string = ""
  @Input() showSocial: boolean = true
  @Input() social: Isocial[] = []
  openSocial(item:Isocial){
    alert(item.url)
  }
  

}
