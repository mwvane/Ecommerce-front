export interface ISidebarItem {
    id?: number
    name: string
    image?: string
    items: {id:number, name: string, count: number}[] 
    opened?: boolean   
}