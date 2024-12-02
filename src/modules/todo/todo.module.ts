import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './infrastructure/schema/todo.schema';
import { TodoController } from './infrastructure/controller/todo.controller';
import { TODO_REPOSITORY } from './domain/repository/todo.repository';
import { TodoMongoRepository } from './infrastructure/repository/todo-mongo.repository';
import { CREATE_TODO_USE_CASE } from './domain/usecase/create-todo.usecase';
import { CreateTodoUseCaseImpl } from './application/usecase/create-todo-impl.usecase';
import { UPDATE_TODO_USE_CASE } from './domain/usecase/update-todo.usecase';
import { UpdateTodoUseCaseImpl } from './application/usecase/update-todo-impl.usecase';
import { FIND_ONE_TODO_USE_CASE } from './domain/usecase/findone-todo-usecase';
import { FindOneTodoUseCaseImpl } from './application/usecase/findone-todo-impl.usecase';
import { DELETE_TODO_USE_CASE } from './domain/usecase/delete-todo.usecase';
import { DeleteTodoUseCaseImpl } from './application/usecase/delete-todo-impl.usecase';
import { FetchAllTodoUseCaseImpl } from './application/usecase/fetchall-todo-impl.usecase';

@Module({})
export class TodoModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static forRoot(setting: any): DynamicModule {
    return {
      module: TodoModule,
      imports: [
        MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
      ],
      controllers: [TodoController],
      providers: [
        {
          provide: TODO_REPOSITORY,
          useClass: TodoMongoRepository,
        },
        {
          provide: CREATE_TODO_USE_CASE,
          useClass: CreateTodoUseCaseImpl,
        },
        {
          provide: UPDATE_TODO_USE_CASE,
          useClass: UpdateTodoUseCaseImpl,
        },
        {
          provide: FIND_ONE_TODO_USE_CASE,
          useClass: FindOneTodoUseCaseImpl,
        },
        {
          provide: DELETE_TODO_USE_CASE,
          useClass: DeleteTodoUseCaseImpl,
        },
        {
          provide: 'FETCH_ALL_TODO_USE_CASE',
          useClass: FetchAllTodoUseCaseImpl,
        },
      ],

      exports: [],
    };
  }
}
