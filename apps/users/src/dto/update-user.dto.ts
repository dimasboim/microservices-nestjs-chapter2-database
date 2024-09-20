import { PartialType } from '@nestjs/mapped-types';
import { CreateuserDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateuserDTO) {
    id: number;
}
