import { Task } from './task.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskSelected = new Subject<Task>();
  taskChanged = new Subject<Task[]>();

  // Data sources should be IMMUTABLE
  private myTasks: Task[] = [];

  // READ
  getTasks() {
    return this.myTasks.slice();
  }

  getTasks(idx: number) {
    return this.myTasks.slice()[idx];
  }

  // CREATE
  saveTask(task: Task) {
    this.myTasks.push(task);
    this.taskSelected.next(task);
    this.taskChanged.next(this.myTasks.slice());
  }

  // UPDATE
  updateTask(idx: number, updatedTaskInfo: Task) {
    this.myTasks[idx] = updatedTaskInfo;
    this.taskChanged.next(this.myTasks.slice());
  }

  // DELETE
  removeBook(idx: number) {
    if (idx !== -1) {
      // We found a book at the index we passed in
      this.taskSelected.next(this.myTasks[idx]);
      this.myTasks.splice(idx, 1);
      this.taskChanged.next(this.myTasks.slice());
    }
  }

  setTasks(tasks: Task[] | []) {
    console.log('tasks:', tasks);

    this.myTasks = tasks || [];
    this.taskChanged.next(this.myTasks.slice());
  }
}
