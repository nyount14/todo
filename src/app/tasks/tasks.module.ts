import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'tasks', component: TasksComponent }]),
  ],
})
export class TasksModule {}
