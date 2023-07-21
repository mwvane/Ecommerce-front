import { ICartItem } from "./cartItem"
import { OrderStatus } from "./orderStatus"
import { IUser } from "./user"

export interface IOrder{
    id?: 0
    user: IUser
    cartItem: ICartItem
    note: string
    status: OrderStatus
}