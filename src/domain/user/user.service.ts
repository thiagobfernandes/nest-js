import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repositories/user.repository";
import { CreateAccountDto } from "./dtos/create-account.dto";
import { UserEntity } from "./entities/user.entity";
import { hash } from "bcryptjs";
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

 
  async listUser (id:number):Promise<Partial<UserEntity>> {
    return this.userRepository.findOneById(id)
  }

  async createUser (user:CreateAccountDto):Promise<UserEntity> {
    user.password = await hash(user.password, 8);
    return this.userRepository.saveUser(user)
  }

  

}
