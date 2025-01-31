"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountSchema = void 0;
const Joi = require("joi");
class CreateAccountSchema {
}
exports.CreateAccountSchema = CreateAccountSchema;
CreateAccountSchema.createAccount = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
};
//# sourceMappingURL=user.dto.schema.js.map