import { CategoryType } from "../enums/category-type"

export interface IcategoryItem {
    id?: number
    image?: string
    deal?: number
    categoryType: CategoryType
    name: string
    productCount?: number
}