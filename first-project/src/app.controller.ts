import { ParseStringPipe } from './parse-string/parse-string.pipe';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id', ParseIntPipe, ParseStringPipe) id: string) {
    const type = typeof id;

    return { id, type };
  }
}
