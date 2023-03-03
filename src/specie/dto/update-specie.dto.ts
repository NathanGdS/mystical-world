import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSpecieDto {
  @IsNotEmpty()
  @IsString()
  mythology: string;

  @IsNotEmpty()
  @IsString()
  shortDescription: string;
}
