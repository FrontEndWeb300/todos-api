import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from 'src/schemas/project';
import { ProjectResponse } from 'src/models/project-response.dto';
import { CreateProject } from 'src/models/create-project.dto';
import { ProjectsResponse } from 'src/models/projects-response.dto';

@Controller('projects')
export class ProjectsController {

    constructor(private service: ProjectsService) { }

    @Get()
    async getAll(): Promise<ProjectsResponse> {
        const data = await this.service.findAll();
        return ({ data });
    }

    @Post()
    async addOne(@Body() entity: CreateProject): Promise<ProjectResponse> {
        return await this.service.create(entity);
    }
}
