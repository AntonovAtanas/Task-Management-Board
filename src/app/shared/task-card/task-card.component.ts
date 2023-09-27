import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent {
  @Input() todoTask!: Task;


  onDelete(id: string):void {

  }
}
