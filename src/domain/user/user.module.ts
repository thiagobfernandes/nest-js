import { Module } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./repositories/user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CacheModule } from "src/infra/cache/redis/cache.module";
import { CacheRepository } from "src/infra/cache/redis/cache-repository";
import { RedisCacheRepository } from "src/infra/cache/redis/redis-cache-repository";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]),CacheModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ],
})
export class UserModule {}
