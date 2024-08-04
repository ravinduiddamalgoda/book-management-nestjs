import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  private books: Book[] = [];
  private idCounter = 1;

  create(createBookInput: CreateBookInput): Book {
    const newBook = { id: this.idCounter++, ...createBookInput };
    this.books.push(newBook);
    return newBook;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookInput: UpdateBookInput): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;

    const updatedBook = { ...this.books[bookIndex], ...updateBookInput };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  remove(id: number): Book {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex === -1) return null;

    const removedBook = this.books.splice(bookIndex, 1)[0];
    return removedBook;
  }
}
