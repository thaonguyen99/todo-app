import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './state/todo.reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ todos: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
