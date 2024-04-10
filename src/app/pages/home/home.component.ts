import { Component, OnInit } from '@angular/core';
import { CategoryType } from 'src/app/enums/category-type';
import { IProduct } from 'src/app/models/product';
import { StaticFiles } from 'src/app/staticFIles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrayy: number[] = []
  get bannerData(){
    return StaticFiles.bannerData[0]
  }
  test: IProduct = 
  {
    images: ["./assets/images/products/clothes-1.jpg"],
    name: "test",
    category: {categoryType: CategoryType.Category, id: 0,name: "Clothes"},
    price: 150,
    quantity: 200,
    createDate: new Date,
    discount: {endDate: new Date, startDate: new Date,note: "", percent: 10}
  }
}
