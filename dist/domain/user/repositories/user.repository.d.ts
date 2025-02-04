import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateAccountDto } from "../dtos/create-account.dto";
import { CacheRepository } from "src/infra/cache/redis/cache-repository";
export declare class UserRepository extends Repository<UserEntity> {
    private readonly repository;
    private readonly cache;
    constructor(repository: Repository<UserEntity>, cache: CacheRepository);
    findOneById(id: number): Promise<UserEntity>;
    saveUser(user: CreateAccountDto): Promise<UserEntity>;
}
