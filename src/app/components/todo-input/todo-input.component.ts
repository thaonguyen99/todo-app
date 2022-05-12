import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/state/todo.actions';
import { TodoTask } from 'src/app/state/todo.model';
import { todoSelector } from 'src/app/state/todo.selectors';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss'],
})
export class TodoInputComponent implements OnInit {
  todoInput?: string = '';
  todos?: TodoTask[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }

  addTodo() {
    if (this.todoInput !== '' || this.todoInput !== null) {
      this.store.dispatch(
        actions.addTodoAction({
          id: this.todos!.length + 1,
          complete: false,
          title: this.todoInput!,
        })
      );
    }
    this.todoInput = '';
  }
}
