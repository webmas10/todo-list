import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from '../../domain/repository/todo.repository';
import { catchError, from, map, Observable } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from '../schema/todo.schema';
import { Model } from 'mongoose';
import { TodoDto } from '../../domain/dto/todo.dto';
import { TodoMapper } from '../mapper/todo.mapper';

@Injectable()
export class TodoMongoRepository implements TodoRepository {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<TodoDocument>,
  ) {}
  create(todo: TodoDto): Observable<TodoDto> {
    console.log('todo', todo);
    return from(this.todoModel.create(TodoMapper.toEntity(todo))).pipe(
      map((todo) => TodoMapper.toDto(todo)),
    );
  }
  update(id: string, todo: TodoDto): Observable<TodoDto> {
    return from(
      this.todoModel.findByIdAndUpdate(id, TodoMapper.toEntity(todo), {
        new: true,
      }),
    ).pipe(
      map((updatedTodo) => {
        if (!updatedTodo) {
          throw new Error(`Todo with id ${id} not found`);
        }
        return TodoMapper.toDto(updatedTodo);
      }),
    );
  }
  findOne(id: string): Observable<TodoDto> {
    return from(this.todoModel.findOne({ _id: id }).exec()).pipe(
      map((todo) => {
        if (!todo) {
          throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        return TodoMapper.toDto(todo);
      }),
      catchError((error) => {
        if (error.name === 'CastError') {
          throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        throw error;
      }),
    );
  }
  delete(id: string): Observable<TodoDto> {
    return from(this.todoModel.findByIdAndDelete(id).exec()).pipe(
      catchError((error) => {
        if (error.name === 'CastError') {
          throw new NotFoundException(`Todo with ID ${id} not found`);
        }
        throw error;
      }),
    );
  }
  fetch(filter: any, skip: number, limit: number): Observable<TodoDto[]> {
    return from(
      this.todoModel.find(filter).skip(skip).limit(limit).exec(),
    ).pipe(map((todos) => todos.map(TodoMapper.toDto)));
  }
}
