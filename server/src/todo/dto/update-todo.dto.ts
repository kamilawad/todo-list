import { IsOptional, IsEnum, IsDateString, IsBoolean, IsNotEmpty } from 'class-validator';
import { Priority } from './create-todo.dto';

export class UpdateTodoDto {

    @IsOptional()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsEnum(Priority)
    priority: Priority;

    @IsOptional()
    @IsDateString()
    date: string;

    @IsOptional()
    @IsBoolean()
    completed: boolean;
}