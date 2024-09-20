import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
// import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { log } from 'console';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { books } from './entity/books-entity';
import { Repository } from 'typeorm';

@Controller()
export class BooksController {
 // constructor(private readonly booksService: BooksService) {}
 //dependency injection
  constructor(
    @InjectRepository(books) private readonly repository: Repository<books>,
  ) {}

  @MessagePattern("books.create")
  async create(@Body() input: CreateBookDto) {
    const book = await this.repository.save({
      ...input
    });

    return { success: true, data: book };
  }

  @MessagePattern('books.update')
  async update(@Param('id') id, @Body() input: UpdateBookDto) {
    const book = await this.repository.findOneBy({ id });

    if (!book) {
      throw new NotFoundException();
    }

    const data = await this.repository.save({
      ...book,
      ...input 
    });

    return { success: true, data };
  }

  @MessagePattern("books.findAll")

    // return this.booksService.findAll();
    async findAll() {
      const books = await this.repository.find();
  
      return { success: true, count: books.length, data: books };
    }
  

  @MessagePattern("books.findOne")
  //findOne(@Param('id') id: string) {
  async findOne(@Payload() id: string) {
    const books = await this.repository.findOneBy({ id: +id });
    
    if (!books) {
      throw new NotFoundException();
    }

    return { success: true, data: books };
  }


}
