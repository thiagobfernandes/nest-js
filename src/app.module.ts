import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './domain/question/question.module';
import { UserModule } from './domain/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/exception.filter';
import { Interceptor } from './interceptor/interceptor';
import { Not } from 'typeorm';
import { NotFoundExceptionFilter } from './filters/error.filter';
import { JoiExceptionFilter } from './filters/joi-exception';

@Module({
  imports: [ConfigModule.forRoot({
    validationSchema: envSchema,
    isGlobal:true
  }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: ['query', 'error', 'schema'], 
      logger: 'advanced-console',
    }),
     QuestionModule,
    UserModule,
    AuthModule],
  controllers: [],
  providers: [
    {
      provide:APP_FILTER,
      useClass:HttpExceptionFilter
    },
    {
      provide:APP_INTERCEPTOR,
      useClass:Interceptor
    },
    {
      provide:APP_FILTER,
      useClass:NotFoundExceptionFilter
    },
    {
      provide:APP_FILTER,
      useClass:JoiExceptionFilter
    }
  ],

})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); 
  }
}
