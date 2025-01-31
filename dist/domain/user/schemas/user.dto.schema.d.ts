import * as Joi from 'joi';
export declare class CreateAccountSchema {
    static createAccount: {
        name: Joi.StringSchema<string>;
        email: Joi.StringSchema<string>;
        password: Joi.StringSchema<string>;
    };
}
