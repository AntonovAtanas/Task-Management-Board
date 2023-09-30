import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent,
    DragDropModule
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoTasks!: Task[];
  // taskCounter: Number = 0;

  constructor(private taskService: TaskService){  }

  ngOnInit(): void {
    this.todoTasks = this.taskService.taskStore().todo;
    // this.taskCounter = countTasks(this.taskService.taskStore(), 'todo');
  };

  drop(event: CdkDragDrop<Task[]>) {
    this.taskService.drop(event);
    // this.taskCounter = countTasks(this.taskService.taskStore(), 'todo');
  }
}
