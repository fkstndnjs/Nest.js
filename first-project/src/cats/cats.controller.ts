import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllcat() {
    return 'all cats';
  }

  @Get(':id')
  getOneCat() {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Delete()
  deleteCat() {
    return 'delete cat';
  }
}
