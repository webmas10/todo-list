import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const FETCH_ALL_TODO_USE_CASE = 'FETCH_ALL_TODO_USE_CASE';

export interface FetchAllTodoUseCase {
  execute(filter: any, skip: number, limit: number): Observable<TodoDto[]>;
}
