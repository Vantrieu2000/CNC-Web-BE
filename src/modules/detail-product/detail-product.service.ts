import { Injectable } from '@nestjs/common';
import { CreateDetailProductDto } from './dto/create-detail-product.dto';
import { UpdateDetailProductDto } from './dto/update-detail-product.dto';

@Injectable()
export class DetailProductService {
  create(createDetailProductDto: CreateDetailProductDto) {
    return 'This action adds a new detailProduct';
  }

  findAll() {
    return `This action returns all detailProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detailProduct`;
  }

  update(id: number, updateDetailProductDto: UpdateDetailProductDto) {
    return `This action updates a #${id} detailProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} detailProduct`;
  }
}
