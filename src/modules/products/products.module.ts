import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductRepository } from './product.repository';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormRepos } from 'src/common/util/function-util';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      ...typeormRepos(),
      ProductRepository
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports : [ProductsService]
})
export class ProductsModule {}
