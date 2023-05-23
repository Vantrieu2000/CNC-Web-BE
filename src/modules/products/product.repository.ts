import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { Product } from "./entities/product.entity";
import { NotFoundException } from "@nestjs/common";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async findAll({ skip, take, search, isAll }): Promise<[Product[], number]> {
    const product: SelectQueryBuilder<Product> = this.createQueryBuilder("product").leftJoinAndSelect(
      "product.image",
      "image"
    );
    if (isAll !== "true") product.take(take).skip(skip);
    if (search) {
      product.where(`product.name like :name`, { name: `%${search}%` });
    }
    return await product.getManyAndCount();
  }
  async findById(id: string): Promise<Product> {
    const product: Product = await this.createQueryBuilder("product")
      .leftJoinAndSelect("product.image", "image")
      .where(`product.id = :id`, { id: id })
      .getOne();
    if (!product) {
      throw new NotFoundException("PRODUCT_NOT_FOUND");
    }
    return product;
  }
}
