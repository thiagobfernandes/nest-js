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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../entities/user.entity");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const cache_repository_1 = require("../../../infra/cache/redis/cache-repository");
let UserRepository = class UserRepository extends typeorm_2.Repository {
    constructor(repository, cache) {
        super(repository.target, repository.manager, repository.queryRunner);
        this.repository = repository;
        this.cache = cache;
    }
    async findOneById(id) {
        const cacheHit = await this.cache.get(`user:${id}`);
        if (cacheHit) {
            return JSON.parse(cacheHit);
        }
        const user = await this.repository.findOneBy({ id });
        await this.cache.set(`user:${id}`, JSON.stringify(user));
        return user;
    }
    async saveUser(user) {
        const createUser = await this.repository.save(user);
        await this.cache.del(`user:${createUser.id}`);
        return createUser;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, common_1.Inject)(cache_repository_1.CacheRepository)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cache_repository_1.CacheRepository])
], UserRepository);
//# sourceMappingURL=user.repository.js.map