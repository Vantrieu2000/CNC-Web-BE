import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UseInterceptors,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product } from "./entities/product.entity";
import { MapInterceptor } from "@automapper/nestjs";
import { ProductDto } from "./dto/product.dto";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: ProductDto,
  })
  @UseInterceptors(MapInterceptor(ProductDto, Product))
  create(@Body() createProductDto: CreateProductDto) : Promise<Product>  {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
