import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { LeadersController } from './leaders.controller';
import { LeadersService } from './leaders.service';
import { Leaders } from './leaders.model';

@Module({
  controllers: [LeadersController],
  providers: [LeadersService],
  imports: [SequelizeModule.forFeature([Leaders])],
})
export class LeadersModel {}
