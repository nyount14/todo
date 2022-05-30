import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Task } from '../tasks/task.model';
import { TasksService } from './tasks.service';
import { HttpService } from '../shared/http/http.service';

@Injectable({ providedIn: 'root' })
export class TasksResolverService implements Resolve<Task[]> {
  constructor(
    private tasksService: TasksService,
    private httpService: HttpService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const tasks = this.tasksService.getTasks();

    if (tasks.length === 0) {
      return this.httpService.fetchPosts() || [];
    } else {
      return tasks;
    }
  }
}
