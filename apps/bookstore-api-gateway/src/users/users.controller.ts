import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service'; // Import the UsersService class
import { CreateuserDTO } from './dto/create-user.dto';
import { log } from 'console';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}
    @Post()
    create(@Body() CreateuserDTO: CreateuserDTO) {
      log('createBookDto controller gateway', CreateuserDTO.firstName);
      return this.usersService.create(CreateuserDTO);
    }
    @Get()
    findAll(){
        return this.usersService.findAll();
    }
}
