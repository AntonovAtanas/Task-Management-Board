import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { v4 as uuid} from 'uuid';

import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private matDialogReference: MatDialog){}

  onCreate(createForm: NgForm) {

    console.log(createForm.value)

    this.matDialogReference.closeAll()
  }

  generateId() {
    return uuid();
  }
}
