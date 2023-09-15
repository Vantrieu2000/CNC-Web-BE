import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";
import { BaseDto } from "src/common/dto/common";
import { Category } from "src/modules/category/entities/category.entity";

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  price: string;

  @ApiProperty()
  @IsNotEmpty()
  material: string;

  @ApiProperty()
  @IsNotEmpty()
  color: string;

  @ApiProperty()
  @IsNotEmpty()
  size: string;

  @ApiProperty()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  detail: string;

  @ApiProperty()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty()
  @IsArray()
  images: [];

  @ApiProperty({ type: [String] })
  // @IsNotEmpty()
  @IsArray()
  detailProducts: [];
}
