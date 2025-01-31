"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envSchema = void 0;
const Joi = require("joi");
exports.envSchema = Joi.object({
    PORT: Joi.number().required(),
    JWT_PRIVATE_KEY: Joi.string().required(),
    JWT_PUBLIC_KEY: Joi.string().required(),
});
//# sourceMappingURL=env.js.map