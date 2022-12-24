import { Controller, Get, HttpException, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http-exception/http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    throw new HttpException('HTTP EXCEPTION', 500);

    return this.appService.getHello();
  }
}
