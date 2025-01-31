import { UserEntity } from 'src/domain/user/entities/user.entity';
export declare class QuestionEntity {
    id: number;
    authorId: number;
    title: string;
    content: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    author: UserEntity;
}
