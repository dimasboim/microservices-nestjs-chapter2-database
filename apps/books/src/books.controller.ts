import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { log } from 'console';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @MessagePattern("books.create")
  create(@Payload() createBookDto: CreateBookDto) {
    log('createBookDto - controller book', createBookDto);
    return this.booksService.create(createBookDto);
  }

  @MessagePattern("books.findAll")
  findAll() {
    return this.booksService.findAll();
  }

  @MessagePattern("books.findOne")
  //findOne(@Param('id') id: string) {
  findOne(@Payload() id: string) {
    return this.booksService.findOne(+id);
  }

  // @MessagePattern("books.update")
  // update(@Payload() updateBookDto: UpdateBookDto){}
  // //update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
  //   return this.booksService.update(updateBookDto.id, updateBookDto);
  // }

  // @MessagePattern("books.remove")
  // remove(@Payload() id: number) {
  //   return this.booksService.remove(UpdateBookDto.id);
  // }
}
