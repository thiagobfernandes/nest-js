import { JoiSchema } from "nestjs-joi";
import { CreateAccountSchema } from "../schemas/user.dto.schema";

export class CreateAccountDto {
  @JoiSchema(CreateAccountSchema.createAccount.name.required())
  name: string;
  @JoiSchema(CreateAccountSchema.createAccount.email.required())
  email: string;
  @JoiSchema(CreateAccountSchema.createAccount.password.required())
  password: string;
}
