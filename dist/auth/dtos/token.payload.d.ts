import { UserEntity } from "src/domain/user/entities/user.entity";
export declare class TokenPayload {
    id: number;
    name: string;
    email: string;
    constructor(user: UserEntity);
}
