export interface ISidebarItem {
    id?: number
    name: string
    imageUrl?: string
    items: {id:number, name: string, count: number}[] 
    opened?: boolean   
}