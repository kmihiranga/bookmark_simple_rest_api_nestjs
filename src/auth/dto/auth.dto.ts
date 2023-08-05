import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    hash: string;

    @IsEmpty()
    firstName: string;
    
    @IsEmpty()
    lastName: string;
}