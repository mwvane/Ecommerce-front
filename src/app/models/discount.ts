import { IProduct } from "./product"

export interface IDiscount{
    id?: number
    startDate: Date
    endDate: Date
    note: string
    percent: number
}