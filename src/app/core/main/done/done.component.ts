import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [
    CommonModule, 
    TaskCardComponent,
    DragDropModule
  ],
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent {
  doneTasks!: Task[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.doneTasks = this.taskService.taskStore().done;
  };

  drop(event: CdkDragDrop<Task[]>) {
    this.taskService.drop(event);
  };


}
