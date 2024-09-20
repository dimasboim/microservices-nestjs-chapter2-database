import { Body, Controller, Get, NotFoundException, Param } from '@nestjs/common';
 
import { MessagePattern, Payload } from '@nestjs/microservices';
import { users } from './entity/users-entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateuserDTO } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UsersController {
  // constructor(private readonly usersService: UsersService) {}
  constructor(
    @InjectRepository(users) private readonly repository: Repository<users>,
  ) {}
  @MessagePattern("books.create")
  async create(@Body() input: CreateuserDTO) {
    const book = await this.repository.save({
      ...input
    });

    return { success: true, data: book };
  }

  @MessagePattern('books.update')
  async update(@Param('id') id, @Body() input: UpdateUserDto) {
    const user = await this.repository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException();
    }

    const data = await this.repository.save({
      ...user,
      ...input 
    });

    return { success: true, data };
  }

  @MessagePattern("users.findAll")
  async findAll() {
    const users = await this.repository.find();

    return { success: true, count: users.length, data: users };
  }


@MessagePattern("books.findOne") 
async findOne(@Payload() id: string) {
  const users = await this.repository.findOneBy({ id: +id });
  
  if (!users) {
    throw new NotFoundException();
  }

  return { success: true, data: users };
}


}
