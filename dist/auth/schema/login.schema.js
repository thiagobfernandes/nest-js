"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSchema = void 0;
const joi_1 = require("joi");
class LoginSchema {
}
exports.LoginSchema = LoginSchema;
LoginSchema.loginSchema = {
    email: joi_1.default.string().required(),
    password: joi_1.default.string().required()
};
//# sourceMappingURL=login.schema.js.map