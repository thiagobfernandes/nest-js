import { UserRepository } from './repositories/user.repository';
import { CreateAccountDto } from './dtos/create-account.dto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(user: CreateAccountDto): Promise<UserEntity>;
}
