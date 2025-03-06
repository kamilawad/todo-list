import { IsNotEmpty, IsEnum, IsDateString, IsBoolean, IsOptional } from 'class-validator';

export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export class CreateTodoDto {
  @IsNotEmpty()
  description: string;

  @IsEnum(Priority)
  priority: Priority;

  @IsOptional()
  @IsDateString()
  date: string;

  @IsOptional()
  @IsBoolean()
  completed: boolean;
}