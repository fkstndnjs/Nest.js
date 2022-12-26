import { SuccessInterceptor } from './success/success.interceptor';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(SuccessInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return { name: 'SeokHyun Yu', age: 25 };
  }
}
