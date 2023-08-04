

import { AutoMap } from "@automapper/classes";
import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Product } from "src/modules/products/entities/product.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class DetailProduct extends AbstractEntity {

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  image: string;

  @Column()
  @AutoMap()
  description: string;

  @Column()
  @AutoMap()
  productId: string;

  @ManyToOne(() => Product, (product) => product.detailProductId, {
    onDelete: 'CASCADE'
  })
  product : Product;

}
