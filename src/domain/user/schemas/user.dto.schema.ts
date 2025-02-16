import * as Joi from "joi";

export class CreateAccountSchema {
  static createAccount = {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };
}
