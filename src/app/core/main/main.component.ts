import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { DoingComponent } from './doing/doing.component';
import { DoneComponent } from './done/done.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent,
    DoingComponent,
    DoneComponent,
    DragDropModule
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
}
