import { JoiSchema } from 'nestjs-joi';
import { CreateAccountSchema } from '../schemas/user.dto.schema';

export class CreateAccountDto {
  @JoiSchema(CreateAccountSchema.createAccount.name)
  name: string;
  @JoiSchema(CreateAccountSchema.createAccount.email)
  email: string;
  @JoiSchema(CreateAccountSchema.createAccount.password)
  password: string;
}
