import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const CREATE_TODO_USE_CASE = 'CREATE_TODO_USE_CASE';

export interface CreateTodoUseCase {
  execute(todo: TodoDto): Observable<TodoDto>;
}
