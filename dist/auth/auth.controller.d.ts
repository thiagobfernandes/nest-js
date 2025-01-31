import { LoginDto } from "./dtos/login.dto";
import { AuthService } from "./auth.service";
import { ExpressRequest } from "../generic-dtos/expressRequest/token.dto";
import { CreateAccountDto } from "../domain/user/dtos/create-account.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    handleLogin(LoginDto: LoginDto): Promise<{
        token: string;
        user: import("../domain/user/entities/user.entity").UserEntity;
    }>;
    handleRegister(createAccountDto: CreateAccountDto): Promise<import("../domain/user/entities/user.entity").UserEntity>;
    test(request: ExpressRequest): Promise<string>;
}
