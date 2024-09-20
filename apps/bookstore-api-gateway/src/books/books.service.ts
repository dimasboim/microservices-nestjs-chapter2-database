import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { ClientProxy } from '@nestjs/microservices';
import { log } from 'console';

@Injectable()
export class BooksService {
  constructor(@Inject('BOOK_CLIENT')private booksClient:ClientProxy) {}
  create(createBookDto: CreateBookDto) {
    log('createBookDto - service book api gateway', createBookDto.title);
    return this.booksClient.send('books.create',createBookDto);
  }
  findAll() {
    return this.booksClient.send('books.findAll', {});
  }

  findOne(id: number) {
    return this.booksClient.send('books.findOne',id);

  }
  
}
