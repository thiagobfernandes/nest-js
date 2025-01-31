"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenPayload = void 0;
class TokenPayload {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.email = user.email;
    }
}
exports.TokenPayload = TokenPayload;
//# sourceMappingURL=token.payload.js.map