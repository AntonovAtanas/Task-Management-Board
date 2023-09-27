import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/Task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoStore = signal<Task[]>(JSON.parse(localStorage.getItem('todoStore') || '[]'));
  doingStore = signal<Task[]>([]);
  doneStore = signal<Task[]>([]);

  constructor() { }

  addTask(newTask: Task) {
    this.todoStore.mutate(store => store.push(newTask));
    if (!localStorage.getItem('todoStore')){
      localStorage.setItem('todoStore', '[]');
    }

    let todoTasks = JSON.parse(localStorage.getItem('todoStore')!)

    todoTasks.push(newTask);

    localStorage.setItem('todoStore', JSON.stringify(todoTasks));
  };

  // moving cards issue? - doing store not implemented

  deleteTask() {
    // todo
  };

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('else')
      // issue - not entering in else
        transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);
    }
}
}
