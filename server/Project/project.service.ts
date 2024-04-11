import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project) private projectRepository: typeof Project,
  ) {}

  async createProject(dto: CreateProjectDto) {
    const project = await this.projectRepository.create(dto);

    return project;
  }
  async getAllProject() {
    const project = await this.projectRepository.findAll();

    return project;
  }
}
