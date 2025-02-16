import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "./domain/user/user.module";
import { envSchema } from "./env";
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from "@nestjs/core";
import { AuthModule } from "./infra/auth/auth.module";
import { HttpExceptionFilter } from "./infra/filters/exception.filter";
import { NotFoundExceptionFilter } from "./infra/filters/error.filter";
import { JoiExceptionFilter } from "./infra/filters/joi-exception";
import { Interceptor } from "./infra/interceptor/interceptor";
import { LoggerMiddleware } from "./infra/logger/logger.middleware";
import { JwtGuard } from "./infra/auth/auth.guard";
import { ConfigModule } from "@nestjs/config";
import { SocketModule } from "./domain/socket/socket.module";
import { GatewayModule } from "./infra/gateway/gateway.module";
import { GatewayWebSocket } from "./infra/gateway/gateway.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: envSchema,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      synchronize: true,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      logging: ["query", "error", "schema"],
      logger: "advanced-console",
    }),
    UserModule,
    AuthModule,
    SocketModule,
    GatewayModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: Interceptor,
    },
    {
      provide: APP_FILTER,
      useClass: NotFoundExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: JoiExceptionFilter,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
