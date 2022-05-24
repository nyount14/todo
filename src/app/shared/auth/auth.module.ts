import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AuthModule {}
