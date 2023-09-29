import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/Task';

@Pipe({
  name: 'taskCounter',
  standalone: true,
  pure: false
})
export class TaskCounterPipe implements PipeTransform {

  transform(array: Task[], taskType: string): number {
    return array.filter(task => task.status === `${taskType}`).length;
  }
}