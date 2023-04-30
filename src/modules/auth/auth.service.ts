import {
  Injectable
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import 'dotenv/config';
// import { User } from './../../database/entities/user.entity';
import {
  UserJwtDto
} from './auth.dto';

@Injectable()
export class AuthService {
  constructor(

    private jwtService: JwtService,
  ) {}

  // public async profile(userId: string) {
  //   const user = await this.userRepository.findOne({
  //     where: { id: userId },
  //     relations: ['profile'],
  //   });

  //   if (!user) throw new NotFoundException(NotFound('user'));
  //   return user;
  // }

  // private encode(user: User) {
  //   const token = this.generateToken(user);

  //   return {
  //     token,
  //     id: user.id,
  //     email: user.email,
  //     role: user.role,
  //   };
  // }

  // private generateToken(user: User) {
  //   const payload: UserJwtDto = {
  //     email: user.email,
  //     id: user.id,
  //     role: user.role,
  //   };
  //   return this.jwtService.sign(payload, {
  //     // expiresIn: process.env.JWT_LOGIN,
  //     expiresIn: '1d',
  //   });
  // }

  public decode(token: string) {
    try {
      const jwt = token.replace('Bearer ', '');
      return this.jwtService.decode(jwt, { json: true }) as UserJwtDto;
    } catch (e) {
      return null;
    }
  }
}
