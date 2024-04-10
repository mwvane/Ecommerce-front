import { ICategory } from "./category"
import { IDiscount } from "./discount"

export interface IProduct{
    id?: number
    name: string
    price: number
    quantity: number
    category: ICategory
    images?: string[]
    description?: string
    rating?: number
    createDate: Date
    discount?: IDiscount
}