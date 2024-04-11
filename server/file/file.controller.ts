import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as path from 'path';

import { diskStorage } from 'multer';

interface FileParams {
  fileName: string;
}

@ApiTags('Файлы')
@Controller()
export class FileController {
  @ApiOperation({ summary: 'Создание задачи' })
  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${file.originalname}`);
        },
      }),
    }),
  )
  async uploadFile() {
    return 'succes';
  }

  @Get('/getFile')
  getFile(@Res() res: Response, @Body() file: FileParams) {
    res.sendFile(path.join(__dirname, '../../uploads/' + file.fileName));
  }
}
