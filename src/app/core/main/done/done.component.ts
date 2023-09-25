import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';

@Component({
  selector: 'app-done',
  standalone: true,
  imports: [
    CommonModule, 
    TaskCardComponent
  ],
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css'],
})
export class DoneComponent {}
