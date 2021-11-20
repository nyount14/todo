import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoitem: string = ''
  todoarray: any[] = [];

constructor(private postsService: PostsService){}
  ngOnInit(): void {
    this.postsService.fetchPosts().subscribe((responseData)=>{
      this.todoarray = responseData
      console.log(responseData)
    });
  }

onAdd(){
  // {todoitem: "milk", id: "4534534", "tea"}
  // {todoitem: this.toditem}
  this.todoarray.push({todoitem: this.todoitem})
  console.log(this.todoarray)
  this.postsService.createAndStorePost(this.todoitem);
  this.todoitem = '';
}

onDelete(i){
 this.todoarray.splice(i, 1);
 this.postsService.overrideData(this.todoarray);
}
}
