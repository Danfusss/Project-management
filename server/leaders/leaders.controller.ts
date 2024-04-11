import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Leaders } from './leaders.model';
import { LeadersService } from './leaders.service';
import { CreateLeadersDto } from './dto/createLeaders.dto';

@ApiTags('Участники')
@Controller('leaders')
export class LeadersController {
  constructor(private LeadersService: LeadersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: Leaders })
  @Post()
  create(@Body() LeadersDto: CreateLeadersDto) {
    return this.LeadersService.createLeaders(LeadersDto);
  }

  @ApiOperation({ summary: 'Получение всех пользователей' })
  @ApiResponse({ status: 200, type: [Leaders] })
  @Get()
  getALL() {
    return this.LeadersService.getAllLeaders();
  }
}
