import { Body, Controller, Post } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { CreateAccountDto } from './dtos/create-account.dto';

@Controller('user')
export class UserController {
  @Post('/create-account')
  async createAccount(@Body() body: CreateAccountDto) {}
}
