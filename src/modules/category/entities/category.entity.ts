
import { AutoMap } from "@automapper/classes";
import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Product } from "src/modules/products/entities/product.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Category extends AbstractEntity {

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  categoryImage: string;

  @OneToMany(() => Product, (product) => product.category, {
    onDelete: 'CASCADE'
  })
  product : Product[];

}
