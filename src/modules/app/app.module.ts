import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from '../todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot()],
})
export class AppModule {
  static forRoot(setting: any): DynamicModule {
    return {
      module: AppModule,
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [() => setting],
        }),
        MongooseModule.forRoot(process.env.MONGO_DB),
        TodoModule.forRoot({}),
      ],
    };
  }
}
