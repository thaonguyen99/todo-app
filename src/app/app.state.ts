import { TodoTask } from './state/todo.model';

export interface AppSate {
  todos: TodoTask[];
}
