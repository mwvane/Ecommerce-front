import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { IcategoryItem } from 'src/app/models/categoryItem';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-descktop-navigation-menu',
  templateUrl: './descktop-navigation-menu.component.html',
  styleUrls: ['./descktop-navigation-menu.component.css']
})
export class DescktopNavigationMenuComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.data)
  }
  @Input() data: ICategory[] = StaticFiles.navigationMenuItems
  log(item: any){
    console.log(item)
  }
}
