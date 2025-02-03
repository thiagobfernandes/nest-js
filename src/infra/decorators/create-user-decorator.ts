import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "src/domain/user/entities/user.entity";
import { ExpressRequest } from "src/infra/generic-dtos/token.dto";
import { TokenPayload } from "../auth/dtos/token.payload";
import { UserDTO } from "src/domain/user/dtos/user-dto";

export const CurrentUser = createParamDecorator(
     (_:undefined, context: ExecutionContext): UserDTO => {
        const request = context.switchToHttp().getRequest<ExpressRequest>();
        const user = new UserDTO(request.tokenPayload.id, request.tokenPayload.name, request.tokenPayload.email)
       return {
        ...user
       }
})

//Get name of user or entity from user anything