import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Leaders } from './leaders.model';

import { CreateLeadersDto } from './dto/createLeaders.dto';

@Injectable()
export class LeadersService {
  constructor(
    @InjectModel(Leaders) private leadersRepository: typeof Leaders,
  ) {}

  async createLeaders(dto: CreateLeadersDto) {
    const leaders = await this.leadersRepository.create(dto);

    return leaders;
  }
  async getAllLeaders() {
    const leaders = await this.leadersRepository.findAll();

    return leaders;
  }
}
