import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/Task';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskStore = signal(JSON.parse(localStorage.getItem('taskStore') || '{"todo":[],"doing":[],"done":[]}'));

  addTask(newTask: Task) {
    this.taskStore.mutate(data => data.todo.push(newTask));
    if (!localStorage.getItem('taskStore')){
      localStorage.setItem('taskStore', '{"todo":[],"doing":[],"done":[]}');
    }

    let todoTasks = JSON.parse(localStorage.getItem('taskStore')!)

    todoTasks.todo.push(newTask);

    localStorage.setItem('taskStore', JSON.stringify(todoTasks));
  };

  deleteTask() {
    // todo
  };

  drop(event: CdkDragDrop<Task[]>) {
    const changedTask = event.item.data

    
    if (event.previousContainer === event.container) {
        this.saveTask(changedTask, event.previousIndex, event.currentIndex, event.previousContainer.id, event.container.id);

        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
        // update taskStore
        this.saveTask(changedTask, event.previousIndex, event.currentIndex, event.previousContainer.id, event.container.id);
        
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
          
        }
  }
    saveTask(updatedTask: Task, previousIndex:number, updatedIndex: number, oldContainer: string, newContainer: string) {

      let todoTasks = JSON.parse(localStorage.getItem('taskStore')!)

      if (oldContainer !== newContainer) {
        todoTasks[oldContainer].splice(previousIndex, 1);
      } else {
        todoTasks[newContainer].splice(previousIndex, 1);
      }

      todoTasks[newContainer].splice(updatedIndex, 0, updatedTask);
      
      localStorage.setItem('taskStore', JSON.stringify(todoTasks));
      this.taskStore.mutate(task => task = todoTasks);
    }
}
