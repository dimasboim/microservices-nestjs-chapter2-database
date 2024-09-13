import { Injectable } from '@nestjs/common';
import{userDTO} from './dto/user.dto';


@Injectable()
export class UsersService {
  
  private users: userDTO[] = [
    {
      id:1,
      firstName:'John',
      lastName:'Doe',
      age:25
    },
    {
      id:2,
      firstName:'Jane',
      lastName:'Doe',
      age:26
    },
    {
      id:3,
      firstName:'Jim',
      lastName:'Doe',
      age:27
    },

  ];

  findAll(){
    return this.users;
  }
}
