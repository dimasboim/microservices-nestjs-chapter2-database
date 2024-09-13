import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDTO } from './dto/book.dto';

@Injectable()
export class BooksService {
  private books:BookDTO[] = [

{
  id: 1,
  title: "The Great Gatsby",
  rating: 5,
  author: "F. Scott Fitzgerald"
},{
  id: 2,
  title: "The Da Vinci Code",
  rating: 4,
  author: "Dan Brown"
}
  ];
  create(createBookDto: CreateBookDto) {
    const newBook:BookDTO={
      ...createBookDto,
      id:this.books.length+1
    }
    this.books.push(newBook);
    return newBook;
  }

  findAll() { 
    return this.books;
  }

  findOne(id: number) {
    return this.books.find(book=>book.id===id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    var bookW:UpdateBookDto;
    bookW=this.books.find(book=>book.id===id);
    return  bookW;
  }

  remove(id: number) {
    return this.books.filter(book=>book.id!==id);
  }
}
