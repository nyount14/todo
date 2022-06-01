import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http/http.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from './task.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  todoitem: string = '';
  todoarray: any[] = [];
  taskSelected = new Subject<Task>();
  showInput: boolean = false;
  selectedIndex: number = null;
  updatedItem: string = '';

  constructor(private HttpService: HttpService) {}
  ngOnInit(): void {
    this.HttpService.fetchPosts().subscribe((responseData) => {
      this.todoarray = responseData.payload;
      console.log("FETCH TASKS", responseData);
    });
  }

  onAdd() {
    this.todoarray.push({ task: this.todoitem });
    console.log(this.todoarray);
    this.HttpService.createAndStorePost(this.todoitem);
    this.todoitem = '';
  }

  getTaskById(id:number){
    return this.todoarray.find(task => task.id === id)
  }

  onDelete(id: number) {
    this.taskSelected.next(this.getTaskById(id));
    this.todoarray = this.todoarray.filter(task => task.id != id)
    this.HttpService.deleteTask(id).subscribe((res: any) => {
      console.log("REMOVED TASK", res)
    });

  }

  onEdit(i: number){
    this.showInput = !this.showInput
    this.selectedIndex = i

  }

  onUpdate(i: number){
    // update todoarray
    this.todoarray[i].task = this.updatedItem
    // this.todoarray.splice(i, 1, this.updatedItem)
    console.log("UPDATED INFO", this.todoarray)
    this.HttpService.updateTask(this.todoarray[i])
    this.updatedItem = '';
    this.showInput = false;
  }
}
