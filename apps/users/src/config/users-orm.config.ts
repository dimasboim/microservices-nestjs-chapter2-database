import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { users } from '../entity/users-entity';

export default registerAs(
  'users-orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',   
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'users',
    entities: [users],
    synchronize: true // Disable this always in production
  }),
);