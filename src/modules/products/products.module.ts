import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormRepos } from 'src/common/util/function-util';
import { ImageRepository } from '../images/images.repository';
import { DetailProductRepository } from '../detail-product/detail-product.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      ...typeormRepos(),
      ProductRepository,
      ImageRepository,
      DetailProductRepository
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports : [ProductsService]
})
export class ProductsModule {}
