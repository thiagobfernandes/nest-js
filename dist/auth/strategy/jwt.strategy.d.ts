import { ConfigService } from "@nestjs/config";
import { UserRepository } from "src/domain/user/repositories/user.repository";
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    private readonly configService;
    constructor(userRepository: UserRepository, configService: ConfigService);
    validate(payload: {
        id: number;
    }): Promise<import("../../domain/user/entities/user.entity").UserEntity>;
}
export {};
