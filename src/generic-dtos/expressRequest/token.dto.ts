import { TokenPayload } from "src/auth/dtos/token.payload"
import { UserEntity } from "src/domain/user/entities/user.entity"

export type ExpressRequest = Request & {
    tokenPayload:TokenPayload,
    user:UserEntity
}