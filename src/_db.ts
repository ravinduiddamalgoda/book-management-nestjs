// _db.ts

export interface Book {
    id: string;
    title: string;
    author: string;
    publishedYear: number;
    genre: string;
  }
  
  export const books: Book[] = [];
  