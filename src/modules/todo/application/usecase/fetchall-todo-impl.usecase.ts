import { Inject, Injectable } from '@nestjs/common';
import {
  TODO_REPOSITORY,
  TodoRepository,
} from '../../domain/repository/todo.repository';
import { Observable } from 'rxjs';
import { TodoDto } from '../../domain/dto/todo.dto';
import { FetchAllTodoUseCase } from '../../domain/usecase/fetchall-todo.usecase';

@Injectable()
export class FetchAllTodoUseCaseImpl implements FetchAllTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
  ) {}
  execute(filter: any, skip: number, limit: number): Observable<TodoDto[]> {
    return this.todoRepository.fetch(filter, skip, limit);
  }
}
