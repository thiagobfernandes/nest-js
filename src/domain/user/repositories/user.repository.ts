import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../entities/user.entity";
import { Repository } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { CreateAccountDto } from "../dtos/create-account.dto";
import { CacheRepository } from "src/infra/cache/redis/cache-repository";
import { RedisCacheRepository } from "src/infra/cache/redis/redis-cache-repository";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
    @Inject(CacheRepository)
    private readonly cache : CacheRepository
  ) {
    super(repository.target, repository.manager, repository.queryRunner)
  }
  async findOneById(id:number):Promise<UserEntity> {
    const cacheHit = await this.cache.get(`user:${id}`)
    if (cacheHit) {
      console.log("cache")
      return JSON.parse(cacheHit);
    }
    const user = await this.repository.findOneBy({id})
    await this.cache.set(`user:${id}`, JSON.stringify(user))
    console.log("banco")
    return user
}

   async saveUser (user:CreateAccountDto):Promise<UserEntity> {
    const createUser = await this.repository.save(user)
    await this.cache.del(`user:${createUser.id}`)
    return createUser
}
}
