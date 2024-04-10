import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() placeholder: string =  "search"
  inputVal: string = ""
  search(){
    alert(this.inputVal)
  }

}
