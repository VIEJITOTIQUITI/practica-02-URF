import { IsNumber, IsString, IsBoolean, Min } from 'class-validator';

export class CreateHabitacionDto {
  @IsNumber()
  numero: number;

  @IsString()
  tipo: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsBoolean()
  disponible: boolean;
}