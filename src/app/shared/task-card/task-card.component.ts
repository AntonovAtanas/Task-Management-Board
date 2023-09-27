import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() todoTask!: Task;

  constructor(private taskService: TaskService){}


  onDelete(id: string):void {
    // todo
    this.taskService.deleteTask()
  }
}
