import { ApiProperty } from '@nestjs/swagger';

import { Leaders } from 'leaders/leaders.model';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

interface TaskCreationAttrs {
  title: string;
  startDate: string;
  endDate: string;
}

@Table({ tableName: 'task' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({
    example: 'Создание кнопки',
    description: 'Название задачи',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  title: string;

  @ApiProperty({
    example: '01.11.2001',
    description: 'Начала задачи',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  startDate: string;

  @ApiProperty({
    example: '03.12.2001',
    description: 'Конец задачи',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  endDate: string;

  @ForeignKey(() => Leaders)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => Leaders)
  author: Leaders;
}
