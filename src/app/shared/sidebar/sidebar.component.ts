import { Component, Input, booleanAttribute } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ISidebarItem } from './sidbarItem';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() data: any
  loading: boolean = true
  expand(opened: boolean, item: ISidebarItem){
    for(let i of this.data){
      if(item != i){
        i.opened = false
      }
    }
  }
}
