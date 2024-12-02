import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  CREATE_TODO_USE_CASE,
  CreateTodoUseCase,
} from '../../domain/usecase/create-todo.usecase';
import { TodoDto } from '../../domain/dto/todo.dto';
import { Observable } from 'rxjs';
import {
  UPDATE_TODO_USE_CASE,
  UpdateTodoUseCase,
} from '../../domain/usecase/update-todo.usecase';
import { FindOneTodoUseCase } from '../../domain/usecase/findone-todo-usecase';
import { DeleteTodoUseCase } from '../../domain/usecase/delete-todo.usecase';
import { FetchAllTodoUseCase } from '../../domain/usecase/fetchall-todo.usecase';

@Controller('todo')
export class TodoController {
  constructor(
    @Inject(CREATE_TODO_USE_CASE)
    private readonly todoCreateUseCase: CreateTodoUseCase,
    @Inject(UPDATE_TODO_USE_CASE)
    private readonly updateTodoUseCase: UpdateTodoUseCase,
    @Inject('FIND_ONE_TODO_USE_CASE')
    private readonly findOneTodoUseCase: FindOneTodoUseCase,
    @Inject('DELETE_TODO_USE_CASE')
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
    @Inject('FETCH_ALL_TODO_USE_CASE')
    private readonly fetchAllTodoUseCase: FetchAllTodoUseCase,
  ) {}

  @Post()
  create(@Body() createTodo: TodoDto): Observable<TodoDto> {
    return this.todoCreateUseCase.execute(createTodo);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() todoDto: TodoDto,
  ): Observable<TodoDto> {
    return this.updateTodoUseCase.execute(id, todoDto);
  }
  @Get(':id')
  findById(@Param('id') id: string, todoDto: TodoDto): Observable<TodoDto> {
    return this.findOneTodoUseCase.execute(id, todoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string, todoDto: TodoDto): Observable<TodoDto> {
    return this.deleteTodoUseCase.execute(id, todoDto);
  }
  @Get()
  fetchAll(
    @Query('filter') filter: any,
    @Query('skip') skip: number,
    @Query('limit') limit: number,
  ): Observable<TodoDto[]> {
    console.log(filter, skip, limit);
    return this.fetchAllTodoUseCase.execute(filter, skip, limit);
  }
}
