import { Body, Controller, Get } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(@Body() body: any): string {
    console.log(body);

    return 'hello';
  }
}
