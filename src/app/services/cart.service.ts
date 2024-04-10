import { Injectable, computed, signal } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  readonly cartList = signal<IProduct[]>([])

  addToCart(product: IProduct){
    this.cartList().push(product)
  }

  totalPrice = computed(() => {
    this.cartList().reduce((a,b) => a + b.price,0)
  })
  
  count = computed(() => {
    return this.cartList().length
  })
}
