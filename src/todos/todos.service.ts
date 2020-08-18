import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schemas/todo';
import { CreateTodoDto } from 'src/models/create-todo-dto';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { TodoResponse } from 'src/models/todo-response';

@Injectable()
export class TodosService {

    constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) { }

    async create(createTodoDto: CreateTodoDto): Promise<TodoResponse> {
        const createdTodo = new this.todoModel(createTodoDto);
        const todo = await createdTodo.save();
        // return this.mapper.map(todo, TodoResponse);
        return this.map(todo);
    }

    async findAll(): Promise<TodoResponse[]> {
        const response = await this.todoModel.find().exec();
        return response.map(this.map);

    }

    private map(todo: Todo): TodoResponse {
        return {
            id: todo._id,
            name: todo.name,
            completed: todo.completed,
            dueDate: todo.dueDate,
            project: todo.project
        } as TodoResponse;
    }
}


/*
constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
  */