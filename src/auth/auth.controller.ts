import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";
import { AuthService } from "./auth.service";
import { JwtGuard } from "./auth.guard";
import { ExpressRequest } from "src/generic-dtos/token.dto";
import { CreateAccountDto } from "src/domain/user/dtos/create-account.dto";
import { JoiPipe } from "nestjs-joi";

@Controller("authentication")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("login")
  async handleLogin(@Body(new JoiPipe(LoginDto)) LoginDto: LoginDto) {
    return await this.authService.login(LoginDto);
  }

  @Post("register")
  async handleRegister(@Body() createAccountDto: CreateAccountDto) {
    return await this.authService.create(createAccountDto);
  }
  @Get("test")
  @UseGuards(JwtGuard)
  async test(@Req() request: ExpressRequest) {
    console.log(request.tokenPayload);
    return "test";
  }
}
