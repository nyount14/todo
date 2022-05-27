import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { SessionGuard } from './shared/auth/session.guard';
import { TasksComponent } from './tasks/tasks.component';

const appRoutes = [
  { path: '', component: AuthComponent },
  {
    path: 'tasks',
    canActivate: [AuthGuard],
    component: TasksComponent
  },
  {
    path: 'auth',
    canActivate: [SessionGuard],
    component: AuthComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
