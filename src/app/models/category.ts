import { CategoryType } from "../enums/category-type"
import { IcategoryItem } from "./categoryItem"

export interface ICategory {
    id: number
    name: string
    mainCategoryID?: number
    image?: string
    deal?: number
    categoryType: CategoryType
    products?: any[] //temp
    productCount?: number
    subCategory?: ICategory[]
}