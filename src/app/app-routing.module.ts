import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const appRoutes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  // {
  //   path: 'tasks',
  //   loadChildren: () =>
  //     import('./tasks/task.module').then((m) => m.TaskModule),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((m) => m.AuthModule),
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
