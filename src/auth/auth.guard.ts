import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { ExpressRequest } from "../generic-dtos/token.dto";
import { TokenPayload } from "src/auth/dtos/token.payload";
import { ExceptionDTO } from "src/generic-dtos/exception.dto";
import { ExceptionError } from "src/generic-dtos/exception-error.dto";

export class JwtGuard extends AuthGuard("jwt") {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err:ExceptionError, user: UserEntity, info, context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    if (user) {
      request.tokenPayload = new TokenPayload(user);
      request.user = new UserEntity();
      
    }
    if(err || !user) {
      throw new ExceptionError('Authentication','UNAUTHORIZED', 401, 'Invalid token or you are not logged in' );
    }
    return super.handleRequest(err, user, info, context);
  }
}
