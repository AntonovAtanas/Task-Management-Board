import { Task } from "../interfaces/Task";

export function countTasks(taskStore: Task[], status: string) {
    return taskStore.filter(task => task.status === `${status}`).length;
  }