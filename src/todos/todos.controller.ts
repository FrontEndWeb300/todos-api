/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Controller, Get, Post, Body, Put, Param, UseGuards, Req } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from 'src/models/create-todo.dto';
import { TodoResponse } from 'src/models/todo-response.dto';
import { TodosResponse } from 'src/models/todos-response.dto';
import { Update } from 'src/models/update.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('todos')
export class TodosController {
    constructor(private service: TodosService) { }


    @Get()
    @UseGuards(JwtAuthGuard)
    async GetAll(): Promise<TodosResponse> {
        const data = await this.service.findAll();
        return ({ data });
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async AddOne(@Body() entity: CreateTodoDto, @Req() req: any): Promise<TodoResponse> {
        console.log(req.user);
        const response = await this.service.create(entity, req.user.username);
        return response;
    }
    @UseGuards(JwtAuthGuard)
    @Post('/completed')
    async markComplete(@Body() entity: TodoResponse): Promise<void> {
        await this.service.markComplete(entity);
        return;
    }
    @UseGuards(JwtAuthGuard)
    @Post('/incomplete')
    async markIncomplete(@Body() entity: TodoResponse): Promise<void> {
        await this.service.markIncomplete(entity);
    }
    @UseGuards(JwtAuthGuard)
    @Put("/:id/project")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async assignProject(@Param() params: any, @Body() project: Update): Promise<void> {
        await this.service.updateProject(params.id, project.value);
    }
    @UseGuards(JwtAuthGuard)
    @Put("/:id/duedate")
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async assignDueDate(@Param() params: any, @Body() dueDate: Update): Promise<void> {
        await this.service.updateDueDate(params.id, dueDate.value);
    }

}
