import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@ApiTags('Задачи')
@Controller('task')
export class ProjectController {
  constructor(private ProjectService: ProjectService) {}

  @ApiOperation({ summary: 'Создание задачи' })
  @ApiResponse({ status: 200, type: Project })
  @Post()
  create(@Body() ProjectDto: CreateProjectDto) {
    return this.ProjectService.createProject(ProjectDto);
  }
}
