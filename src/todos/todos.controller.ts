import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from 'src/models/create-todo.dto';
import { TodoResponse } from 'src/models/todo-response.dto';
import { TodosResponse } from 'src/models/todos-response.dto';
import { Update } from 'src/models/update.dto';

@Controller('todos')
export class TodosController {
    constructor(private service: TodosService) { }


    @Get()
    async GetAll(): Promise<TodosResponse> {
        const data = await this.service.findAll();
        return ({ data });
    }

    @Post()
    async AddOne(@Body() entity: CreateTodoDto): Promise<TodoResponse> {
        const response = await this.service.create(entity);
        return response;
    }

    @Post('/completed')
    async markComplete(@Body() entity: TodoResponse): Promise<void> {
        await this.service.markComplete(entity);
        return;
    }

    @Post('/incomplete')
    async markIncomplete(@Body() entity: TodoResponse): Promise<void> {
        await this.service.markIncomplete(entity);
    }

    @Put("/:id/project")
    async assignProject(@Param() id: string, @Body() project: Update): Promise<void> {
        await this.service.updateProject(id, project.value);
    }

    @Put("/:id/duedate")
    async assignDueDate(@Param() id: string, @Body() dueDate: Update): Promise<void> {
        await this.service.updateDueDate(id, dueDate.value);
    }

}
