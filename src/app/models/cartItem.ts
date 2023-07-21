import { IDiscount } from "./discount"
import { IProduct } from "./product"

export interface ICartItem {
    id: number
    product: IProduct
    discount: IDiscount
    quantity: number
    totalPrice: number
    userId: number
}