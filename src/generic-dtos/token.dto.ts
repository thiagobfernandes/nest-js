import { UserEntity } from "src/domain/user/entities/user.entity";
import { TokenPayload } from "src/infra/auth/dtos/token.payload";

export type ExpressRequest = Request & {
  tokenPayload: TokenPayload;
  user: UserEntity;
};
