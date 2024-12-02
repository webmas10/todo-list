import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const UPDATE_TODO_USE_CASE = 'UPDATE_TODO_USE_CASE';

export interface UpdateTodoUseCase {
  execute(id: string, todo: TodoDto): Observable<TodoDto>;
}
