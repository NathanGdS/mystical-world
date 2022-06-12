import { IsNotEmpty, IsString } from 'class-validator';
export class CreateSpecieDto {
  @IsNotEmpty()
  @IsString()
  readonly shortDescription: string;

  @IsNotEmpty()
  @IsString()
  readonly mythology: string;
}
