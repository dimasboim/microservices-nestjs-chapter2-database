import { Inject,Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateuserDTO } from './dto/create-user.dto';
import { log } from 'console';
@Injectable()
export class UsersService {
    constructor(@Inject('USERS_CLIENT') private usersClient: ClientProxy) {}
    findAll(){
    return this.usersClient.send('users.findAll',{}) //'mock findAll response';
    }

    create(createUserto: CreateuserDTO) {
        log('createUserDto - service users api gateway', createUserto.firstName);
        return this.usersClient.send('users.create',createUserto);
      }
}
