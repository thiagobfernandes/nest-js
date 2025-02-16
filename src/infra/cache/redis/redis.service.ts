import Redis from 'ioredis'
import { ConfigService } from "@nestjs/config"
import { Env } from "src/env"
import { Injectable } from '@nestjs/common'

@Injectable()
export class RedisService extends Redis {
constructor (private readonly configService:ConfigService<Env> ) { 
    super({
        host:configService.get('REDIS_HOST'),
        port:configService.get('REDIS_PORT'),
        db:0
    })
}

onModuleDestroy() {
   return this.disconnect()
}

}