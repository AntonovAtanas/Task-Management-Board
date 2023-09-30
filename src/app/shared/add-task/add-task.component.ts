import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task-service.service';
import { generateId } from '../utils';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  constructor(private taskService: TaskService, private matDialogReference: MatDialog) {}

  onCreate(createForm: NgForm) {

    if (createForm.invalid) {
      return
    }

    let userTask = createForm.value.task;

    const newTask: Task = {
      task: userTask,
      _taskId: generateId()
    }

    this.taskService.addTask(newTask);

    this.matDialogReference.closeAll();
  }

}
