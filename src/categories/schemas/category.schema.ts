import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Category {
  @Prop({ required: true, unique: true })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
