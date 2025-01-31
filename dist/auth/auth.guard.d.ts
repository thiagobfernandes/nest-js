import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { UserEntity } from "src/domain/user/entities/user.entity";
declare const JwtGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtGuard extends JwtGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    handleRequest(err: any, user: UserEntity, info: any, context: ExecutionContext): any;
}
export {};
