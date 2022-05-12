import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoTask } from './todo.model';

export const todoSelector = createSelector(
  createFeatureSelector('todos'),
  (todos: TodoTask[]) => todos
);
