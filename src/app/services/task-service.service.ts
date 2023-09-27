import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoStore = signal<Task[]>(JSON.parse(localStorage.getItem('todoStore') || '[]'));
  doingStore = signal<Task[]>([]);
  doneStore = signal<Task[]>([]);

  constructor() { }

  addTask(newTask: Task){
    this.todoStore.mutate(store => store.push(newTask));
    if (!localStorage.getItem('todoStore')){
      localStorage.setItem('todoStore', '[]');
    }

    let todoTasks = JSON.parse(localStorage.getItem('todoStore')!);

    todoTasks.push(newTask);

    localStorage.setItem('todoStore', JSON.stringify(todoTasks));

  };

  deleteTask(){

  };
}
