import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { CreateAccountDto } from './dtos/create-account.dto';
import { UserEntity } from './entities/user.entity';
import { hash } from 'bcryptjs';
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(user: CreateAccountDto): Promise<UserEntity> {
    const userMail = await this.userRepository.findBy({ email: user.email });
    if (userMail) {
      throw new Error('User already exists');
    }
    user.password = await hash(user.password, 8);
    return this.userRepository.save(user);
  }
}
