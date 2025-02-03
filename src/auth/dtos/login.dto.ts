import { JoiSchema } from "nestjs-joi";
import { LoginSchema } from "../schema/login.schema";
import Joi from "joi";

export class LoginDto {
  @JoiSchema(LoginSchema.loginSchema.email)
  email: string;
  @JoiSchema(LoginSchema.loginSchema.password)
  password: string;
}
