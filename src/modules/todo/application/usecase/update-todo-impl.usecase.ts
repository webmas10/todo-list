import { Inject, Injectable } from '@nestjs/common';
import {
  TODO_REPOSITORY,
  TodoRepository,
} from '../../domain/repository/todo.repository';
import { Observable } from 'rxjs';
import { TodoDto } from '../../domain/dto/todo.dto';
import { UpdateTodoUseCase } from '../../domain/usecase/update-todo.usecase';

@Injectable()
export class UpdateTodoUseCaseImpl implements UpdateTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
  ) {}
  execute(id: string, todo: TodoDto): Observable<TodoDto> {
    return this.todoRepository.update(id, todo);
  }
}
