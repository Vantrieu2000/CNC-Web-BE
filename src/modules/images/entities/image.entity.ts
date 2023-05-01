import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Product } from "src/modules/products/entities/product.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Image extends AbstractEntity {

  @Column()
  productId: string;

  @Column({nullable: true})
  image: string;

  @ManyToOne(() => Product, (Product) => Product.id, {
    onDelete: 'CASCADE'
  })
  product : Product;
}
