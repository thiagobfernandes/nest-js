import { QuestionEntity } from "src/domain/question/entities/question.entity";
import { UserEntity } from "src/domain/user/entities/user.entity";

export class TokenPayload {
  id: number;
  name: string;
  email: string;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}
