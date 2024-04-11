import { ApiProperty } from '@nestjs/swagger';

import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';

import { Task } from 'task/task.model';

interface LeadersCreationAttrs {
  name: string;
  startDate: string;
  endDate: string;
  post: string;
}

@Table({ tableName: 'leaders' })
export class Leaders extends Model<Leaders, LeadersCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'Петров Иван Витальевич',
    description: 'ФИО сотрудника',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({
    example: 'Стажер',
    description: 'Роль на проекте',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  post: string;
  @ApiProperty({
    example: '01.11.2001',
    description: 'Дата начала на проекте',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  startDate: string;
  @ApiProperty({
    example: '20.12.2023',
    description: 'Дата начала на проекте',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  endDate: string;

  @HasMany(() => Task)
  task: Task[];
}
