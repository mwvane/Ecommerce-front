import { Component } from '@angular/core';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent {
   get categoryItems(){
    return StaticFiles.categorySliderItems
   }
}
