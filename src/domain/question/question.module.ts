import { Module } from "@nestjs/common";
import { QuestionEntity } from "./entities/question.entity";
import { QuestionController } from "./question.controller";
import { QuestionService } from "./question.service";
import { UserRepository } from "src/domain/user/repositories/user.repository";

@Module({
  imports: [QuestionEntity],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
