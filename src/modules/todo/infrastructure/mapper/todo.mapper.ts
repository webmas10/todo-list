import { TodoDto } from '../../domain/dto/todo.dto';
import { TodoDocument } from '../schema/todo.schema';

export class TodoMapper {
  static toDto(entity: TodoDocument): TodoDto {
    return {
      id: entity._id.toString(),
      title: entity.title,
      description: entity.description,
      isCompleted: entity.isCompleted,
      createdAt: entity.createdAt,
    };
  }
  static toEntity(dto: TodoDto): Partial<TodoDocument> {
    return {
      title: dto.title,
      description: dto.description,
      isCompleted: dto.isCompleted,
      createdAt: dto.createdAt || new Date(),
      updatedAt: new Date(),
    };
  }
}
