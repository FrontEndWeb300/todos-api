import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from 'src/schemas/todo';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Project, ProjectSchema } from 'src/schemas/project';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
// import 'src/profiles/todo.profile';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Todo.name,
                schema: TodoSchema
            },
            {
                name: Project.name,
                schema: ProjectSchema
            }
        ]),


    ],
    providers: [TodosService, ProjectsService],
    controllers: [TodosController, ProjectsController]
})
export class TodosModule { }
