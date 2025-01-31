import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './domain/question/question.module';
import { UserModule } from './domain/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { AuthModule } from './auth/auth.module';
import { LoggerMiddleware } from './logger/logger.middleware';

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
  providers: [],






})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*'); 
  }
}
