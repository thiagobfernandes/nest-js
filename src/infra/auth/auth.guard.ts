import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { TokenPayload } from "src/infra/auth/dtos/token.payload";
import { ExceptionDTO } from "src/infra/generic-dtos/exception.dto";
import { ExceptionError } from "src/infra/generic-dtos/exception-error.dto";
import { Reflector } from "@nestjs/core";
import { IS_PUBLIC_KEY } from "./public";

@Injectable()
export class JwtGuard extends AuthGuard("jwt") {
  constructor(private reflector:Reflector) {
    super()
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ])
    if(isPublic){
      return true
    }
    return super.canActivate(context);
  } 
}
