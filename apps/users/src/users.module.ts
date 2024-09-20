import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import usersOrmConfig from './config/users-orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './entity/users-entity';

@Module({
  imports:  [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [usersOrmConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory:
 
        usersOrmConfig,
    }),
    TypeOrmModule.forFeature([users ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
