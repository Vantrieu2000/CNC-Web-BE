import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductRepository } from './product.repository';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class ProductsService  {
  constructor(private productRepository: ProductRepository) {
}

  async create(createProductDto: CreateProductDto) : Promise<Product> {
    const product : Product = this.productRepository.create(createProductDto)
    return product;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
