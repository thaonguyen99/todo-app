import { createAction, props } from '@ngrx/store';
import { TodoTask } from './todo.model';

const addTodoAction = createAction('[Todo] Add Todo', props<TodoTask>());
const updateTodoAction = createAction('[Todo] Update Todo', props<TodoTask>());
const deleteTodoAction = createAction('[Todo] Delete Todo', props<TodoTask>());

export const actions = { addTodoAction, updateTodoAction, deleteTodoAction };
