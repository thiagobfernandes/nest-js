"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
const passport_1 = require("@nestjs/passport");
const user_entity_1 = require("../domain/user/entities/user.entity");
const token_payload_1 = require("./dtos/token.payload");
class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info, context) {
        const request = context.switchToHttp().getRequest();
        if (user) {
            request.tokenPayload = new token_payload_1.TokenPayload(user);
            request.user = new user_entity_1.UserEntity();
        }
        return super.handleRequest(err, user, info, context);
    }
}
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=auth.guard.js.map