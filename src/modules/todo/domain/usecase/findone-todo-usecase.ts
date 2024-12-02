import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const FIND_ONE_TODO_USE_CASE = 'FIND_ONE_TODO_USE_CASE';

export interface FindOneTodoUseCase {
  execute(id: string, todo: TodoDto): Observable<TodoDto>;
}
