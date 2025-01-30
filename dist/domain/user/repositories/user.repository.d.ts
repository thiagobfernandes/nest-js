import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository extends Repository<UserEntity> {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
}
