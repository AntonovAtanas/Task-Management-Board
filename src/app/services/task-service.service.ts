import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/Task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskStore = signal<Task[]>(JSON.parse(localStorage.getItem('taskStore') || '[]'));

  constructor() { }

  addTask(newTask: Task) {
    this.taskStore.mutate(data => data.push(newTask));
    if (!localStorage.getItem('taskStore')){
      localStorage.setItem('taskStore', '[]');
    }

    let todoTasks = JSON.parse(localStorage.getItem('taskStore')!)

    todoTasks.push(newTask);

    localStorage.setItem('taskStore', JSON.stringify(todoTasks));
  };

  deleteTask() {
    // todo
  };

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        // TODO: index issue when in 
        // TODO: not persisting in localstorage because of not changed data there

        switch (event.item.data.status) {
          case 'todo': event.item.data.status = event.container.id; break;
          case 'doing': event.item.data.status = event.container.id; break;
          case 'done': event.item.data.status = event.container.id; break;
        }
        console.log(event)

        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}
}
