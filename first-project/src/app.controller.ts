import { SuccessInterceptor } from './success/success.interceptor';
import { ParseStringPipe } from './parse-string/parse-string.pipe';
import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(SuccessInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() id: string) {
    const type = typeof id;

    return { id, type };
  }
}
