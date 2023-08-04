import { PartialType } from '@nestjs/swagger';
import { CreateDetailProductDto } from './create-detail-product.dto';

export class UpdateDetailProductDto extends PartialType(CreateDetailProductDto) {}
