import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { books } from '../entity/books-entity';

export default registerAs(
  'books-orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',   
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'books',
    entities: [books],
    synchronize: true, // Disable this always in production
  }),
);