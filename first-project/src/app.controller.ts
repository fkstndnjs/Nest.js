import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/:id')
  getHello(@Query() query: any): string {
    console.log(query);

    return 'hello';
  }
}
