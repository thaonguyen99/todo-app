import { createReducer, on } from '@ngrx/store';
import { actions } from './todo.actions';
import { TodoTask } from './todo.model';

export const initialTodoList: TodoTask[] = [];

export const todoReducer = createReducer(
  initialTodoList,
  on(actions.addTodoAction, (state, todo) => {
    return [todo, ...state];
  }),
  on(actions.updateTodoAction, (state, todo) => {
    let tempTodo = state.findIndex((t) => t.id === todo.id);
    const tempState = [...state];
    if (tempTodo !== -1) {
      tempState[tempTodo] = todo;
    }
    return [...tempState];
  }),
  on(actions.deleteTodoAction, (state, todo) => {
    let todos = state.filter((t) => t.id !== todo.id);
    return [...todos];
  })
);
