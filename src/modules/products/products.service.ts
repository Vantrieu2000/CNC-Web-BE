import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
import { FindAdDto } from './dto/search-product.dto';

@Injectable()
export class ProductsService  {
  constructor(private productRepository: ProductRepository) {
}

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const product : Product = await this.productRepository.save(createProductDto)
    return product;
  }

  async findAll(filter : FindAdDto) {
    const [data , total] : [Product[] , number] = await this.productRepository.findAll(filter)
    return {data , total};
  }

  findOne(id: string) {
    return this.productRepository.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
