import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      // {
      //   path: '',
      //   component: BookshelfHomeComponent,
      // },
      // {
      //   path: 'new',
      //   component: BookshelfEditorComponent,
      // },
      // {
      //   path: ':id',
      //   component: BookDetailsComponent,
      //   resolve: [BookResolverService],
      // },
      // {
      //   path: ':id/edit',
      //   component: BookshelfEditorComponent,
      //   resolve: [BookResolverService],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  FormsModule],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
