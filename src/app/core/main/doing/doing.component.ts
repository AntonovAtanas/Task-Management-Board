import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from 'src/app/shared/task-card/task-card.component';

@Component({
  selector: 'app-doing',
  standalone: true,
  imports: [
    CommonModule,
    TaskCardComponent
  ],
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent {

}
