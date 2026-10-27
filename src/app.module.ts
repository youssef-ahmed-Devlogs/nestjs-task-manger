import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task-manager'),
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
