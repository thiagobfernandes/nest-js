import { QuestionEntity } from 'src/domain/question/entities/question.entity';
export declare class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    question: QuestionEntity[];
}
