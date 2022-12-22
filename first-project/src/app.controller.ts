import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}
  @Get()
  getHello(@Query('age') age: string): string {
    console.log(age);

    return this.appService.getHello();
  }
}
