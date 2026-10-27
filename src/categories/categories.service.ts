import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema.js';
import { Model, Types } from 'mongoose';
import { PaginatedDto } from '../common/dto/paginated.dto.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll(page: number, limit: number): Promise<PaginatedDto<Category>> {
    const results = await this.categoryModel
      .find()
      .sort({ name: 'asc' })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const total = await this.categoryModel.countDocuments().exec();

    return { results, page, limit, total };
  }

  async findOne(id: Types.ObjectId): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();

    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }

    return category;
  }

  async update(
    id: Types.ObjectId,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, {
        returnDocument: 'after',
      })
      .exec();

    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }

    return category;
  }

  async remove(id: Types.ObjectId): Promise<void> {
    const category = await this.categoryModel.findByIdAndDelete(id).exec();

    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
  }
}
