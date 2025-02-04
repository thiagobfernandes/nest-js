import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateAccountDto } from "./dtos/create-account.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getSingleUser(@Param('id') id: number) {
    return await this.userService.listUser(id);
  }

  @Post("register")
  async createUser(@Body() user:CreateAccountDto) {
  return await this.userService.createUser(user)
  }

  
}
