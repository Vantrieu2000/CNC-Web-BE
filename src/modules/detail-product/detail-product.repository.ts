import { EntityRepository, Repository, SelectQueryBuilder } from "typeorm";
import { NotFoundException } from "@nestjs/common";
import { DetailProduct } from "./entities/detail-product.entity";

@EntityRepository(DetailProduct)
export class DetailProductRepository extends Repository<DetailProduct> {
}
