import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ProjectCreationAttrs {
  title: string;
  startDate: string;
  endDate: string;
}

@Table({ tableName: 'project' })
export class Project extends Model<Project, ProjectCreationAttrs> {
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
  status: string;

  @ApiProperty({
    example: 'ООО"РОСАГРО"',
    description: 'Название компании клиента',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  clientName: string;

  @ApiProperty({
    example: '03.12.2001',
    description: 'Название проекта',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  name: string;

  @ApiProperty({
    example: '03.12.2001',
    description: 'Конец задачи',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  number: string;

  @ApiProperty({
    example:
      'Локализация и адаптация финансовых процессов под требования российского законодательства',
    description: 'описание проекта',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @ApiProperty({
    example: 'Механика и Электроника',
    description: 'Описание индустрии заказчика',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  industryName: string;

  @ApiProperty({
    example: '01.11.2001',
    description: 'Начало проекта',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  startDate: string;

  @ApiProperty({
    example: '03.12.2001',
    description: 'Конец проекта',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  endDate: string;

  @ApiProperty({
    example: 'Москва',
    description: 'Город в котором проводится проект',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  city: string;
  // @ForeignKey(() => Leaders)
  // @Column({ type: DataType.INTEGER })
  // userId: number;

  // @BelongsTo(() => Leaders)
  // author: Leaders;
}
