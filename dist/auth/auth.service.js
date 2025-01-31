"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../domain/user/repositories/user.repository");
const bcryptjs_1 = require("bcryptjs");
const exception_error_dto_1 = require("../generic-dtos/exceptionError/exception-error.dto");
let AuthService = class AuthService {
    constructor(jwt, userRepository) {
        this.jwt = jwt;
        this.userRepository = userRepository;
    }
    async login(loginDto) {
        const user = await this.userRepository.findOneBy({ email: loginDto.email });
        if (!user || !(await bcryptjs.compare(loginDto.password, user.password))) {
            throw new exception_error_dto_1.ExceptionError('Invalid credentials', 'UNAUTHORIZED', 401, 'Invalid credentials');
        }
        const payload = { id: user.id, email: user.email };
        const token = this.jwt.sign(payload);
        return { token, user };
    }
    async create(user) {
        const userMail = await this.userRepository.findBy({ email: user.email });
        if (userMail.length > 0) {
            console.log(userMail);
            throw new Error('User already exists');
        }
        user.password = await (0, bcryptjs_1.hash)(user.password, 8);
        return this.userRepository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.UserRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map