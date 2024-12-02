import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class TodoDto {
  @IsOptional()
  id?: string;
  @IsString()
  title: string;
  @IsString()
  @MinLength(2)
  description: string;
  @IsBoolean()
  isCompleted: boolean;
  @IsOptional()
  createdAt?: Date;
}
