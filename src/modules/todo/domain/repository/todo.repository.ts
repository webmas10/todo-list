import { Observable } from 'rxjs';
import { TodoDto } from '../dto/todo.dto';

export const TODO_REPOSITORY = 'TODO_REPOSITORY';

export interface TodoRepository {
  create(todo: TodoDto): Observable<TodoDto>;
  fetch?(filter: any, skip: number, limit: number): Observable<TodoDto[]>;
  findOne?(id: string): Observable<TodoDto>;
  update?(id: string, todo: TodoDto): Observable<TodoDto>;
  delete?(id: string): Observable<TodoDto>;
}
