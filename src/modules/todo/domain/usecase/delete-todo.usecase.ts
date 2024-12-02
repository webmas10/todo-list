import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const DELETE_TODO_USE_CASE = 'DELETE_TODO_USE_CASE';

export interface DeleteTodoUseCase {
  execute(id: string, todo: TodoDto): Observable<TodoDto>;
}
