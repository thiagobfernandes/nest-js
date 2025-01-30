import { QuestionEntity } from 'src/domain/question/entities/question.entity';
export declare class UserDTO {
    id: number;
    name: string;
    email: string;
    question: QuestionEntity[];
}
