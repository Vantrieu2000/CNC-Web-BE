import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { Product } from "./entities/product.entity";
import { ProductRepository } from "./product.repository";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/core";
import { FindAdDto } from "./dto/search-product.dto";
import { ImageRepository } from "../images/images.repository";
import { DetailProductRepository } from "../detail-product/detail-product.repository";

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductRepository, private imageRepository: ImageRepository, private detailProductRepository : DetailProductRepository) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product: Product = await this.productRepository.save(createProductDto);
    await this.imageRepository.save(createProductDto.images.map((image) => ({
      image,
      productId: product.id
    })))
    await this.detailProductRepository.save(createProductDto.detailProducts.map((detail) => ({
      detail,
      productId: product.id
    })))
    return product;
  }

  async findAll(filter: FindAdDto) {
    const [data, total]: [Product[], number] = await this.productRepository.findAll(filter);
    return { data, total };
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
