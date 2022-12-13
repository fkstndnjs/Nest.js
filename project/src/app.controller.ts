import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  @Get()
  getTest() {
    return this.catsService.getHello();
  }
}
