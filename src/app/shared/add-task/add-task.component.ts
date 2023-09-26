import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { v4 as uuid } from 'uuid';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private matDialogReference: MatDialog) {}

  onCreate(createForm: NgForm) {

    let userTask = createForm.value.task;

    const newTask: Task = {
      task: userTask,
      _taskId: this.generateId()
    }

    this.setTask(newTask);

    this.matDialogReference.closeAll();
  }

  generateId(): string {
    return uuid();
  };

  setTask(newTask: Task): void {
    let todoTasks: Task[] = JSON.parse(localStorage.getItem('todo') || '[]');

    todoTasks.push(newTask);

    localStorage.setItem('todo', JSON.stringify(todoTasks));
  }
}
