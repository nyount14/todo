import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  createAndStorePost(todoitem: string) {
    const postData: {todoitem: string} = { todoitem: todoitem };
    this.http
      .post<{ todoitem: string }>(
        'https://nancy-project-6b73b-default-rtdb.firebaseio.com/posts.json',
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




    fetchPosts() {
      return this.http
        .get<{}>(
          'https://nancy-project-6b73b-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map(responseData => {
          const postsArray: any[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
        }
        return postsArray;
    }))
      // .subscribe(
      //   responseData => {
      //     console.log(responseData);
      //   },
      // );
    }
    overrideData(todoarray) {
      this.http
        .put(
          'https://nancy-project-6b73b-default-rtdb.firebaseio.com/posts.json',
          todoarray
        )
        .subscribe(response => {
          console.log(response);
        });

  };
}
