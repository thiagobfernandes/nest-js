"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const user_repository_1 = require("../domain/user/repositories/user.repository");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const user_entity_1 = require("../domain/user/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                global: true,
                useFactory(configService) {
                    const privateKey = configService.get('JWT_PRIVATE_KEY');
                    const publicKey = configService.get('JWT_PUBLIC_KEY');
                    return {
                        signOptions: { algorithm: 'RS256' },
                        privateKey: Buffer.from(privateKey, 'base64'),
                        publicKey: Buffer.from(publicKey, 'base64'),
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity])
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_repository_1.UserRepository, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map