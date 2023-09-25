import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { AddTaskComponent } from 'src/app/shared/add-task/add-task.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private matDialog: MatDialog){}

  addTask() {
    this.matDialog.open(AddTaskComponent, {
      panelClass: 'mdc-dialog__surface'
    })
  }
}
