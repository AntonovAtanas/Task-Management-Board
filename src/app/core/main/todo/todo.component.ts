import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoTasks!: Task[];

  constructor(private taskService: TaskService){  }

  ngOnInit(): void {
    this.todoTasks = this.taskService.todoStore();
  };
}
