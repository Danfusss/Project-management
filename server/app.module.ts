import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { LeadersService } from './src/leaders/leaders.service';
import { LeadersModel } from 'leaders/leaders.module';
import { Leaders } from 'leaders/leaders.model';
import { Task } from 'task/task.model';
import { FileModel } from 'file/file.module';
import { TaskModel } from 'task/task.module';

@Module({
  controllers: [],
  providers: [LeadersService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Leaders, Task],
      autoLoadModels: true,
    }),
    LeadersModel,
    TaskModel,
    FileModel,
  ],
})
export class AppModule {}
