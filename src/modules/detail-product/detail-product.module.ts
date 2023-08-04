import { Module } from '@nestjs/common';
import { DetailProductService } from './detail-product.service';
import { DetailProductController } from './detail-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormRepos } from 'src/common/util/function-util';
import { DetailProductRepository } from './detail-product.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      ...typeormRepos(),
      DetailProductRepository,
    ]),
  ],
  controllers: [DetailProductController],
  providers: [DetailProductService],
  exports: [DetailProductService],

})
export class DetailProductModule {}
