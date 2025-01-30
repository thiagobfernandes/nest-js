import * as Joi from 'joi';

export const envSchema = Joi.object({
    PORT: Joi.number().required(),
    JWT_PRIVATE_KEY: Joi.string().required(),
    JWT_PUBLIC_KEY: Joi.string().required(),
});

export type Env = {
    PORT: number;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY:string
};