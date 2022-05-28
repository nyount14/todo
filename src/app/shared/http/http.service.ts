import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksService } from '../../tasks/tasks.service';
import { Task } from '../../tasks/task.model';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private tasksService: TasksService
    ) {}

  createAndStorePost(todoitem: string) {
    const postData: {todoitem: string} = { todoitem: todoitem };
    this.http
      .post<{ todoitem: string }>(
        'http://nancys-todo-list.herokuapp.com/api/vi/tasks/my_tasks',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(
        responseData => {
          console.log(responseData);
        },
      );
    }




    // fetchPosts() {
    //   return this.http
    //     .get<{}>(
    //       'http://nancys-todo-list.herokuapp.com/api/vi/tasks/my_tasks'
    //   )
    //   .pipe(
    //     map(responseData => {
    //       const postsArray: any[] = [];
    //       for (const key in responseData) {
    //         if (responseData.hasOwnProperty(key)) {
    //           postsArray.push({ ...responseData[key], id: key });
    //         }
    //     }
    //     return postsArray;
    // }))


    fetchPosts() {
      return this.http
        .get<{}>(
          'http://nancys-todo-list.herokuapp.com/api/vi/tasks/my_tasks'
      )
      .pipe(
        tap((res: any) => {
          this.tasksService.setTasks(res.payload)
        })
      )



      // .subscribe(
      //   responseData => {
      //     console.log(responseData);
      //   },
      // );
    }
    overrideData(todoarray) {
      this.http
        .put(
          'http://nancys-todo-list.herokuapp.com/api/vi/tasks/my_tasks',
          todoarray
        )
        .subscribe(response => {
          console.log(response);
        });

  };
}
