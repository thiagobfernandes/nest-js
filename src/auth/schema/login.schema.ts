import * as Joi from 'joi'

export class LoginSchema {

static loginSchema = {
    email: Joi.string().required(),
    password: Joi.string().required()
}

}