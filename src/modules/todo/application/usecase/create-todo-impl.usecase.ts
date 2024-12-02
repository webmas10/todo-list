import { Inject, Injectable } from '@nestjs/common';
import { CreateTodoUseCase } from '../../domain/usecase/create-todo.usecase';
import {
  TODO_REPOSITORY,
  TodoRepository,
} from '../../domain/repository/todo.repository';
import { Observable } from 'rxjs';
import { TodoDto } from '../../domain/dto/todo.dto';

@Injectable()
export class CreateTodoUseCaseImpl implements CreateTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
  ) {}
  execute(todo: TodoDto): Observable<TodoDto> {
    return this.todoRepository.create(todo);
  }
}
