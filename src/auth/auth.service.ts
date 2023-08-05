import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  
  signIn(): string {
    return 'i am signin';
  }

  signUp(): string {
    return 'i am signup';
  }
}
