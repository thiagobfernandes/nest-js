import { QuestionEntity } from "src/domain/question/entities/question.entity";

export class UserDTO {
  id: number;
  name: string;
  email: string;
  question?: QuestionEntity[];

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
