import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";
import * as bcryptjs from 'bcryptjs';

import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "src/domain/user/repositories/user.repository";
import { CreateAccountDto } from "src/domain/user/dtos/create-account.dto";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { hash } from "bcryptjs";


@Injectable()
export class AuthService { 

    constructor(
        private readonly jwt:JwtService,
        private readonly userRepository:UserRepository
    ) {}

    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOneBy({ email: loginDto.email });
        if (!user || !(await bcryptjs.compare(loginDto.password, user.password))) {
          throw new UnauthorizedException('Invalid credentials');
        }
    
        const payload = { id: user.id, email: user.email };
        const token = this.jwt.sign(payload);
    
        return { token, user };
      }
      
      async create(user: CreateAccountDto): Promise<UserEntity> {
        const userMail = await this.userRepository.findBy({ email: user.email });
        if (userMail.length > 0) {
            console.log(userMail)
          throw new Error('User already exists');
        }
       
        user.password = await hash(user.password, 8);
        return this.userRepository.save(user);
      }

        




}