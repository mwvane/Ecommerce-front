import { Component, Input } from '@angular/core';
import { CategoryType } from 'src/app/enums/category-type';
import { IProduct } from 'src/app/models/product';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  @Input() data: IProduct = 
  {
    category: 
    {
      categoryType: CategoryType.Category,
      id: 1, 
      name: "",
    },
    createDate: new Date(),
    name: "",
    price: 0,
    quantity: 0,
  }
}
