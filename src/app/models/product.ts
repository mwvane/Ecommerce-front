import { ICategory } from "./category"

export interface IProduct{
    id?: number
    name: string
    price: number
    quantity: number
    category: ICategory
    images?: string[]
    description?: string
    rating: number
    createDate: Date
}