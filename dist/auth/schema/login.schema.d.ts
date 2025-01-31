import * as Joi from 'joi';
export declare class LoginSchema {
    static loginSchema: {
        email: Joi.StringSchema<string>;
        password: Joi.StringSchema<string>;
    };
}
