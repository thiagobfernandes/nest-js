import { UserService } from "./user.service";
import { CreateAccountDto } from "./dtos/create-account.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getSingleUser(id: number): Promise<Partial<import("./entities/user.entity").UserEntity>>;
    createUser(user: CreateAccountDto): Promise<import("./entities/user.entity").UserEntity>;
}
