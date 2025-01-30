import { JoiSchema } from "nestjs-joi";
import { LoginSchema } from "../schema/login.schema";

export class LoginDto {
    email: string;
    password: string;
}