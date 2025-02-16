import * as Joi from "joi";

export const envSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_PRIVATE_KEY: Joi.string().required(),
  JWT_PUBLIC_KEY: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_DB: Joi.number().required(),
});

export type Env = {
  PORT: number;
  JWT_PRIVATE_KEY: string;
  JWT_PUBLIC_KEY: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_DB:number
};
