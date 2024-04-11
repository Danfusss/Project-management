import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

import { Task } from 'task/task.model';
import { Project } from './project.model';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [SequelizeModule.forFeature([Project, Task])],
})
export class ProjectModel {}
