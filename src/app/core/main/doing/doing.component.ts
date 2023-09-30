import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-doing',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    DragDropModule
  ],
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit{

  doingTasks!: Task[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.doingTasks = this.taskService.taskStore().doing;
  };

  drop(event: CdkDragDrop<Task[]>) {
    this.taskService.drop(event);
  };
}
