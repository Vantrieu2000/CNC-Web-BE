import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoryRepository } from "./category.repository";
import { Category } from "./entities/category.entity";
import { FindAdDto } from "../products/dto/search-product.dto";

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category: Category = await this.categoryRepository.save(createCategoryDto);
    return category;
  }

  async findAll(filter: FindAdDto) {
    const [data, total]: [Category[], number] = await this.categoryRepository.findAll(filter);
    return { data, total };
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
