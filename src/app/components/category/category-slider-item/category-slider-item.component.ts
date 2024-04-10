import { Component, Input } from '@angular/core';
import { CategoryType } from 'src/app/enums/category-type';
import { IcategoryItem } from 'src/app/models/categoryItem';

@Component({
  selector: 'app-category-slider-item',
  templateUrl: './category-slider-item.component.html',
  styleUrls: ['./category-slider-item.component.css']
})
export class CategorySliderItemComponent {
  @Input() data:IcategoryItem = {productCount:0, name: "", categoryType: CategoryType.Slider}
}
