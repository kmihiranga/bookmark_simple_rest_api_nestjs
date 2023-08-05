import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prismaService: PrismaService) {}
  
  async signIn(dto: AuthDto) {
    // create hash password
    const hash = await argon2.hash(dto.hash);
    // save to database
    const user = await this.prismaService.user.create({
      data: {
        ...dto,
        hash,
      },
    });
    delete user.hash;
    // return saved user data
    return user;
  }

  signUp(): string {
    return 'i am signup';
  }
}
