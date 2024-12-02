import { Inject, Injectable } from '@nestjs/common';
import {
  TODO_REPOSITORY,
  TodoRepository,
} from '../../domain/repository/todo.repository';
import { Observable } from 'rxjs';
import { TodoDto } from '../../domain/dto/todo.dto';
import { DeleteTodoUseCase } from '../../domain/usecase/delete-todo.usecase';

@Injectable()
export class DeleteTodoUseCaseImpl implements DeleteTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
  ) {}
  execute(id: string): Observable<TodoDto> {
    return this.todoRepository.delete(id);
  }
}
