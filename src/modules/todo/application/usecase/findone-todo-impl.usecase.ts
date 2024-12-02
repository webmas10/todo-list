import { Inject, Injectable } from '@nestjs/common';
import {
  TODO_REPOSITORY,
  TodoRepository,
} from '../../domain/repository/todo.repository';
import { Observable } from 'rxjs';
import { TodoDto } from '../../domain/dto/todo.dto';
import { FindOneTodoUseCase } from '../../domain/usecase/findone-todo-usecase';

@Injectable()
export class FindOneTodoUseCaseImpl implements FindOneTodoUseCase {
  constructor(
    @Inject(TODO_REPOSITORY) private readonly todoRepository: TodoRepository,
  ) {}
  execute(id: string): Observable<TodoDto> {
    return this.todoRepository.findOne(id);
  }
}
