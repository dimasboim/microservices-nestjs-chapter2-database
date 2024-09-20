import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { books } from './entity/books-entity';
import { ConfigModule } from '@nestjs/config';
import booksOrmConfig from './config/books-orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
imports: [
  ConfigModule.forRoot({
    isGlobal: true,
    load: [booksOrmConfig],
    expandVariables: true,
  }),
  TypeOrmModule.forRootAsync({
    useFactory:
     // process.env.NODE_ENV !== 'production' ? ormConfig : ormConfigProd,
      booksOrmConfig,
  }),
  TypeOrmModule.forFeature([books]),
],

  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
