import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormRepos } from 'src/common/util/function-util';
import { CategoryRepository } from './category.repository';

@Module({
  imports : [
    TypeOrmModule.forFeature([
      ...typeormRepos(),
      CategoryRepository
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
