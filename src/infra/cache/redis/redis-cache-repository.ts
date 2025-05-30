import { Injectable } from "@nestjs/common";
import { CacheRepository } from "./cache-repository";
import { RedisService } from "./redis.service";


@Injectable()
export class RedisCacheRepository  implements CacheRepository {
    constructor (private readonly redis: RedisService) {}
   async set(key: string, value: string): Promise<void> {
        await this.redis.set(key,value, 'EX', 20)
    }

    get(key: string): Promise<any> {
        return this.redis.get(key)
    }

    async del(key: string): Promise<void> {
     await this.redis.del(key)   
    }
}