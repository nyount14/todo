import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todoitem: string = '';
  todoarray: any[] = [];

  constructor(private HttpService: HttpService) {}
  ngOnInit(): void {
    this.HttpService.fetchPosts().subscribe((responseData) => {
      this.todoarray = responseData.payload;
      console.log("FETCH TASKS", responseData);
    });
  }

  onAdd() {
    // {todoitem: "milk", id: "4534534", "tea"}
    // {todoitem: this.toditem}
    this.todoarray.push({ task: this.todoitem });
    console.log(this.todoarray);
    this.HttpService.createAndStorePost(this.todoitem);
    this.todoitem = '';
  }

  onDelete(i) {
    this.todoarray.splice(i, 1);
    this.HttpService.overrideData(this.todoarray);
  }
}
