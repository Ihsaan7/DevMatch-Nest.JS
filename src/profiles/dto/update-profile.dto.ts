import { IsOptional, IsString , Length } from "class-validator";

export class UpdateProfileDto{
  @IsString()
  @IsOptional()
  @Length(3 ,50)
  name: string;

  @IsString()
  @IsOptional()
  description: string;
};