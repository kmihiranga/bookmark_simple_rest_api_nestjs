import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class BookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsInt()
  @IsNotEmpty()
  userId: number;
}
