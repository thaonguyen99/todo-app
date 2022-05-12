import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { actions } from 'src/app/state/todo.actions';
import { TodoTask } from 'src/app/state/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo?: TodoTask;

  editTodo: boolean = false;
  todoInput?: string = '';
  completeTodo: boolean = false;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.todoInput = this.todo!.title;
    this.completeTodo = this.todo!.complete;
  }

  updateToggle() {
    this.editTodo = !this.editTodo;
  }

  updateTodo() {
    this.editTodo = !this.editTodo;
    this.store.dispatch(
      actions.updateTodoAction({
        id: this.todo!.id,
        title: this.todoInput!,
        complete: this.todo!.complete,
      })
    );
  }

  deleteTodo() {
    this.store.dispatch(
      actions.deleteTodoAction({
        id: this.todo!.id,
        title: this.todo!.title,
        complete: this.todo!.complete,
      })
    );
  }

  completeToggle() {
    this.completeTodo = !this.completeTodo;
    this.store.dispatch(
      actions.updateTodoAction({
        id: this.todo!.id,
        title: this.todoInput!,
        complete: this.completeTodo,
      })
    );
  }
}
