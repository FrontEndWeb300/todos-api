import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from 'src/schemas/project';
import { Model } from 'mongoose';
import { pick } from 'lodash';
import { ProjectResponse } from 'src/models/project-response.dto';

@Injectable()
export class ProjectsService {

    constructor(@InjectModel(Project.name) private projectModel: Model<Project>) { }

    async create(item: { name: string }): Promise<ProjectResponse> {
        const createdProject = new this.projectModel(item);
        const response = await createdProject.save();
        return this.map(response);
    }


    async findAll(): Promise<ProjectResponse[]> {
        const response = await await this.projectModel.find().exec();
        return response.map(this.map);
    }

    private map(project: Project): ProjectResponse {
        const result = pick(project, ['id', 'name']);
        return result as ProjectResponse;
    }
}
