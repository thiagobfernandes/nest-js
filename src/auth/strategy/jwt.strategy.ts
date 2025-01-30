import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-jwt';
import { UserRepository } from "src/domain/user/repositories/user.repository";
import { ExtractJwt } from 'passport-jwt';
import { TokenPayload } from "src/auth/dtos/token.payload";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(
    private readonly userRepository:UserRepository,
    private readonly configService:ConfigService
) {
super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // pegando do header da requisição o bearer token
    secretOrKey:Buffer.from(configService.get('JWT_PUBLIC_KEY'), 'base64'), //secret key do jwt mas no caso aqui estou usando a public key pq eu só quero ler
    algorithm:['RS256']
})

}
async validate(payload:{id:number}){
    const user = await this.userRepository.findOneBy({id:payload.id});
    if (!user) {
        throw new Error('User not found');
    }
    return user
}  

}