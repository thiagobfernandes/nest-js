"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const question_module_1 = require("./domain/question/question.module");
const user_module_1 = require("./domain/user/user.module");
const config_1 = require("@nestjs/config");
const env_1 = require("./env");
const auth_module_1 = require("./auth/auth.module");
const logger_middleware_1 = require("./logger/logger.middleware");
<<<<<<< HEAD
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes('*');
=======
const core_1 = require("@nestjs/core");
const exception_filter_1 = require("./filters/exception.filter");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
>>>>>>> cefa71bb8dff91a949cd89142c2f87886da7e3c4
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot({
                validationSchema: env_1.envSchema,
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db.sqlite',
                synchronize: true,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                logging: ['query', 'error', 'schema'],
                logger: 'advanced-console',
            }),
            question_module_1.QuestionModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: exception_filter_1.HttpExceptionFilter
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map