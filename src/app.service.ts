import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/TaskDto';
@Injectable()
export class AppService {
  private task:TaskDto[]=[];
  getHello(): string {
    return 'Hello World!';
  }
  getCats():TaskDto[]{
    return this.task;
  }
  async create1(TaskDto:TaskDto){
    let task1:TaskDto={
      content:TaskDto.content
    }
    this.task.push(task1)
    // console.log('->',task)
    return 'Task created!'
  }
  async deleteTask(c:any){
    // console.log(c.id)
    return this.task.find((task)=>task.content===c.id)
  }
}
