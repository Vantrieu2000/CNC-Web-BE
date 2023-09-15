import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from "class-validator";
import { AbstractEntity } from "src/common/abstract/entity.abstract";

export class ProductDto extends AbstractEntity {
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
  category: string;

  @ApiProperty({ type: [String] })
  @IsNotEmpty()
  @IsArray()
  images: [];

  @ApiProperty({ type: [String] })
  // @IsNotEmpty()
  @IsArray()
  detailProducts: [];
}
