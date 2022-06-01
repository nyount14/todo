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
    const postData: {task: string} = { task: todoitem };
    this.http
      .post<{ todoitem: string }>(
        'https://nancys-todo-list.herokuapp.com/api/v1/tasks',
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

    overrideData(todoarray: any[]) {
      this.http
        .put(
          'https://nancys-todo-list.herokuapp.com/api/v1/tasks',
          todoarray
        )
        .subscribe(response => {
          console.log("UPDATED TASK", response);
        });

    };




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
          'https://nancys-todo-list.herokuapp.com/api/v1/tasks/my_tasks'
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



    updateTask(task: Task){
      return this.http.put(`https://nancys-todo-list.herokuapp.com/api/v1/tasks/${task.id}`,
      task)
      .subscribe(response => {
        console.log("UPDATED TASK", response);
      });
    }

    deleteTask(id:number){
      return this.http.delete(`https://nancys-todo-list.herokuapp.com/api/v1/tasks/${id}`)
    }
}
