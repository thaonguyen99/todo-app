import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { TodoTask } from 'src/app/state/todo.model';
import { todoSelector } from 'src/app/state/todo.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: TodoTask[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {}

  loadTodos() {
    this.store.select(todoSelector).subscribe((state) => (this.todos = state));
  }
}
