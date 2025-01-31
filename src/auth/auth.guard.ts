import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { ExpressRequest } from "../ExpressRequest/token.dto";
import { TokenPayload } from "src/auth/dtos/token.payload";

export class JwtGuard extends AuthGuard('jwt') {
    canActivate(context: ExecutionContext):boolean | Promise<boolean> | Observable<boolean> {
        return super.canActivate(context);
}

handleRequest(err, user:UserEntity, info, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    if(user){
        request.tokenPayload = new TokenPayload(user)
        request.user = new UserEntity()
    }
    return super.handleRequest(err, user, info, context);

}
}