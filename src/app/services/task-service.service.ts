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
        // TODO: issue when move tasks from other to new containers

        switch (event.item.data.status) {
          case 'todo': event.item.data.status = event.container.id; break;
          case 'doing': event.item.data.status = event.container.id; break;
          case 'done': event.item.data.status = event.container.id; break;
        }
        
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

      
      for (let i = 0; i < todoTasks.length; i++) {
        if (todoTasks[i]._taskId === updatedTask._taskId) {
          todoTasks[i].status = updatedTask.status
        }
      }
      
      localStorage.setItem('taskStore', JSON.stringify(todoTasks));
      this.taskStore.mutate(task => task = todoTasks);
    }
}
