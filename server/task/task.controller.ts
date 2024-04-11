import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Task } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';

@ApiTags('Задачи')
@Controller('task')
export class TaskController {
  constructor(private TaskService: TaskService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: Task })
  @Post()
  create(@Body() TaskDto: CreateTaskDto) {
    return this.TaskService.createLeaders(TaskDto);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [Task] })
  @Get()
  getALL() {
    return this.TaskService.getAllLeaders();
  }
}
