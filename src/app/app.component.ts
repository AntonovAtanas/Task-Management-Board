import { Component } from '@angular/core';

import { NavigationComponent } from './core/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-task-management';
};