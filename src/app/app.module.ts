import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PrintTodoComponent } from './components/print-todo/print-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    PrintTodoComponent,
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
