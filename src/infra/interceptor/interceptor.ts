import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { TokenPayload } from "../auth/dtos/token.payload";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { ExpressRequest } from "src/generic-dtos/token.dto";

@Injectable()
export class Interceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<ExpressRequest>();
    if(request.user) {
      request.tokenPayload = new TokenPayload(request.user)
      request.user = new UserEntity()
    }
    return next.handle();
  }
}
