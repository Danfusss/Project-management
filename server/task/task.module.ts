import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { TaskService } from './task.service';
import { Task } from './task.model';
import { TaskController } from './task.controller';
import { Leaders } from 'leaders/leaders.model';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [SequelizeModule.forFeature([Leaders, Task])],
})
export class TaskModel {}
