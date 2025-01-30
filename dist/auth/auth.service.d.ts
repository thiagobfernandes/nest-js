import { LoginDto } from "./dtos/login.dto";
import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "src/domain/user/repositories/user.repository";
import { CreateAccountDto } from "src/domain/user/dtos/create-account.dto";
import { UserEntity } from "src/domain/user/entities/user.entity";
export declare class AuthService {
    private readonly jwt;
    private readonly userRepository;
    constructor(jwt: JwtService, userRepository: UserRepository);
    login(loginDto: LoginDto): Promise<{
        token: string;
        user: UserEntity;
    }>;
    create(user: CreateAccountDto): Promise<UserEntity>;
}
