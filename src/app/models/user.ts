import { Role } from "./userRole"

export interface IUser {
    id?: number
    firstname: string
    lastname: string
    email: string
    birthDate: Date
    password: string
    unId: string
    image?: string
    phone: string
    address?: string
    role: Role
    createDate: Date
    isVerified?: boolean
    isDeleted?: boolean
}