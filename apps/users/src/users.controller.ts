import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // getHello(): string {
  //   return this.usersService.getHello();
  // }
  @MessagePattern("users.findAll")
  findAll(){
    return this.usersService.findAll();
  };
}
