import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './schemas/category.schema.js';
import { Model } from 'mongoose';
import { PaginatedDto } from '../common/dto/paginated.dto.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async findAll(
    page: number,
    limit: number,
  ): Promise<PaginatedDto<CategoryDocument>> {
    const results = await this.categoryModel
      .find()
      .sort({ name: 'asc' })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.categoryModel.countDocuments().exec();

    return { results, page, limit, total };
  }
}
