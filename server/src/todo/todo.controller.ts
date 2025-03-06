import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TodoService } from './todo.service';
import { GetUser } from '../auth/decorator';
import { todo } from 'node:test';
import { CreateTodoDto, UpdateTodoDto } from './dto';

@UseGuards(AuthGuard('jwt'))
@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) {}

    @Get()
    async getTodos(@GetUser('id') userId: number) {
        return this.todoService.getTodos(userId);
    }

    @Get(':id')
    getTodoById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) todoId: number) {
        return this.todoService.getTodoById(userId, todoId);
    }

    @Post()
    createTodo(
        @GetUser('id') userId: number,
        @Body() dto: CreateTodoDto,
    ) {
        return this.todoService.createTodo(userId, dto);
    }

    @Patch(':id')
    updateTodo(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) todoId: number,
        @Body() dto: UpdateTodoDto,
    ) {
        return this.todoService.updateTodo(userId, todoId, dto);
    }

    @Delete(':id')
    deleteTodoById(
        @GetUser('id') userId: number,
        @Param('id', ParseIntPipe) todoId: number,
    ) {
        return this.todoService.deleteTodo(userId, todoId);
    }
}
