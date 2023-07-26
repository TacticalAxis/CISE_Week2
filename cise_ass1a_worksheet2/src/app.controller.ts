import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ARTICLES } from './dummydata/articles';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // api endpoint for articles
  @Get('/api/articles')
  getArticles(): any[] {
    return ARTICLES;
  }

  // api endpoint for articles by id
  @Get('/api/articles/:id')
  getArticleById(@Param('id') id: string): any {
    // use find() to return that specific article
    return ARTICLES.find((article) => article._id == id);
  }
}