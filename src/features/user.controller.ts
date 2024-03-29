import { Controller, HttpException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserRequestDTO } from 'src/dtos/create-user-request.dto';
import { GeneralResponseMessageDTO } from 'src/dtos/general-response-message.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'create_user' })
  async createUser(reqData: CreateUserRequestDTO) {
    const res = new GeneralResponseMessageDTO(200, '');

    try {
      const createdUser = await this.userService.createUser(reqData.userType);
      if (!createdUser) {
        res.statusCode = 500;
        res.message = 'Something wrong when create user';
        res.data = createdUser;
      } else {
        res.message = 'Create user successfully';
        res.data = createdUser;
      }
    } catch (e) {
      if (e instanceof HttpException) {
        res.statusCode = e.getStatus();
        res.message = e.getResponse();
        res.data = null;
      } else {
        res.statusCode = 500;
        res.message = e.toString();
        res.data = null;
      }
    }

    return res;
  }
}
