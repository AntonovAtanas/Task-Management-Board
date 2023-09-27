import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoStore = signal<Task[]>([]);
  doingStore = signal<Task[]>([]);
  doneStore = signal<Task[]>([]);

  constructor() { }

  addTask(newTask: Task){
    this.todoStore.mutate(store => store.push(newTask));
  }
}
