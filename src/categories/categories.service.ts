import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schemas/category.schema.js';
import { Model, mongo, Types } from 'mongoose';
import { PaginatedDto } from '../common/dto/paginated.dto.js';
import { CreateCategoryDto } from './dto/create-category.dto.js';
import { UpdateCategoryDto } from './dto/update-category.dto.js';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto.js';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const createdCategory = new this.categoryModel(createCategoryDto);
      return await createdCategory.save();
    } catch (error) {
      if (error instanceof mongo.MongoServerError && error.code === 11000) {
        throw new ConflictException(
          `Category ${createCategoryDto.name} already exists`,
        );
      }

      throw error;
    }
  }

  async findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Promise<PaginatedDto<Category>> {
    const { page, limit } = paginationQueryDto;

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
    try {
      const category = await this.categoryModel
        .findByIdAndUpdate(id, updateCategoryDto, {
          returnDocument: 'after',
        })
        .exec();

      if (!category) {
        throw new NotFoundException(`Category ${id} not found`);
      }

      return category;
    } catch (error) {
      if (error instanceof mongo.MongoServerError && error.code === 11000) {
        throw new ConflictException(
          `Category ${updateCategoryDto.name} already exists`,
        );
      }
      throw error;
    }
  }

  async remove(id: Types.ObjectId): Promise<void> {
    const category = await this.categoryModel.findByIdAndDelete(id).exec();

    if (!category) {
      throw new NotFoundException(`Category ${id} not found`);
    }
  }
}
