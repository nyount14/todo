import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { AuthModule } from './shared/auth/auth.module';
import { AuthComponent } from './shared/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavigationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
