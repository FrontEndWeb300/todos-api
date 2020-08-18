import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from 'src/schemas/todo';
import { CreateTodoDto } from 'src/models/create-todo-dto';
import { TodoResponse } from 'src/models/todo-response';

@Controller('todos')
export class TodosController {
    constructor(private service: TodosService) { }

    @Get()
    async GetAll(): Promise<{ data: TodoResponse[] }> {
        const data = await this.service.findAll();
        return ({ data });
    }

    @Post()
    async AddOne(@Body() entity: CreateTodoDto): Promise<TodoResponse> {
        const response = await this.service.create(entity);
        return response;
    }
}
