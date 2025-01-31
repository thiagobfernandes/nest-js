import * as Joi from 'joi';
export declare const envSchema: Joi.ObjectSchema<any>;
export type Env = {
    PORT: number;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY: string;
};
