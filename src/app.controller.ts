import { Controller, Get, HttpCode, Post, Redirect ,Injectable, Body, Delete, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { TaskDto } from './dto/TaskDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('cats')
  getCats(){
    return this.appService.getCats()
  }
  @Post('task')
  async createTask(@Body() TaskDto:TaskDto){
    return this.appService.create1(TaskDto)
  }
  @Delete('task/:id')
  async deleteTask(@Param() id:string){
    return this.appService.deleteTask(id)
  }
}
