import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, Query, ValidationPipe } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';
import { MapInterceptor } from '@automapper/nestjs';
import { FindAdDto } from '../products/dto/search-product.dto';
import { CategoryDto } from './dto/category.dto';

@Controller('category')
@ApiTags("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: CreateCategoryDto,
  })
  @UseInterceptors(MapInterceptor(CreateCategoryDto, CreateCategoryDto))
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: Category,
  })
  @UseInterceptors(MapInterceptor(CreateCategoryDto, Category))
  findAll(@Query(new ValidationPipe({ transform: true }))
  filter: FindAdDto) {
    return this.categoryService.findAll(filter);
  }

  @Get('getListCategory')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: [CategoryDto],
  })
  @UseInterceptors(MapInterceptor(CreateCategoryDto, Category))
  findAllCategoryList() {
    return this.categoryService.findList();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
