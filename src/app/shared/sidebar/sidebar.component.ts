import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ISidebarItem } from './sidbarItem';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarItems: ISidebarItem[] = StaticFiles.sidebarItems
  expand(opened: boolean, item: ISidebarItem){
    for(let i of this.sidebarItems){
      if(item != i){
        i.opened = false
      }
    }
  }
}
