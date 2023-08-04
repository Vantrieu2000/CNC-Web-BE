import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { Category } from "./entities/category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async findAll({ skip, take, search, isAll }): Promise<[Category[], number]> {
    const product: SelectQueryBuilder<Category> = this.createQueryBuilder("category").leftJoinAndSelect(
      "category.product",
      "product"
    ).leftJoinAndSelect(
      "product.image",
      "image"
    ).orderBy("product.createdOnDate","DESC");
    if (isAll !== "true") product.take(take).skip(skip);
    if (search) {
      product.where(`category.name like :name`, { name: `%${search}%` });
    }
    return await product.getManyAndCount();
  }

  async findById(id: string): Promise<Category> {
    const category: Category = await this.createQueryBuilder("category")
      .leftJoinAndSelect("category.product", "product")
      .where(`category.id = :id`, { id: id })
      .getOne();
    if (!category) {
      throw new NotFoundException("PRODUCT_NOT_FOUND");
    }
    return category;
  }
}
