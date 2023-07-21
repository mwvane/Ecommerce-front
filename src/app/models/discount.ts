import { IProduct } from "./product"

export interface IDiscount{
    id?: number
    product: IProduct[]
    startDate: Date
    endDate: Date
    note: string
    percent: number
}