import { Body, Controller, Get, Param, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  //http://localhost:8000/cats/hello
  @Get('hello/:id/:idd')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param('id') id: string,
    @Param('idd') idd: string,
  ): string {
    console.log(req);
    console.log(id, idd);

    // return this.appService.getHello();
    return 'Hello';
  }
}
