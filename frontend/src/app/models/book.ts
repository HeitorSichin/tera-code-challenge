export enum BookCategory {
    University = 'universitario',
    Manga = 'manga',
    Technology = 'technology',
    Romance = 'romance',
    Childish = 'infantil'

}

export interface Book {
    name: string;
    author: string,
    description: string,
    cover_picture: string,
    category: BookCategory,
    stock: number,
    users_who_liked: string[]

}