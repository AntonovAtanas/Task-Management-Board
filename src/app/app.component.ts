import { Component } from '@angular/core';

import { NavigationComponent } from './core/navigation/navigation.component';
import { MainComponent } from './core/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    MainComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-task-management';
};