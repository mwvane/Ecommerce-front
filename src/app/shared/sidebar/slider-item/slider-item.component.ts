import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISidebarItem } from '../sidbarItem';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent {
  @Input() data: ISidebarItem = {name: "", items: []}
  @Output() expand = new EventEmitter()
  
  onExpand(){
    this.data.opened = !this.data.opened
    this.expand.emit(this.data.opened)
  }
}
