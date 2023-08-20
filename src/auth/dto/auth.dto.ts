import { IsEmail, IsNotEmpty, IsString, ValidateIf } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  hash: string;

  @ValidateIf((object, value) => value !== null)
  firstName: string;

  @ValidateIf((object, value) => value !== null)
  lastName: string;
}
