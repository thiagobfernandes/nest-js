import { Body, Controller, Get, HttpStatus, Post, Req, UseGuards } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";
import { AuthService } from "./auth.service";
import { CreateAccountDto } from "src/domain/user/dtos/create-account.dto";
import { JoiPipe } from "nestjs-joi";
import { CurrentUser } from "../decorators/create-user-decorator";
import { Public } from "./public";
import { UserDTO } from "src/domain/user/dtos/user-dto";
import { ResponseDTO } from "../generic-dtos/response.dto";

@Controller("authentication")

export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post("login")
  async handleLogin(@Body(new JoiPipe(LoginDto)) LoginDto: LoginDto) {
    return await this.authService.login(LoginDto);
  }
  @Public()
  @Post("register")
  async handleRegister(@Body() createAccountDto: CreateAccountDto) {
    const userCreated = await this.authService.create(createAccountDto);
    return new ResponseDTO(userCreated, "User created", HttpStatus.CREATED);
  }

  @Get("test")
  async test(@CurrentUser() user:UserDTO) {
    return user.email
  }
}
