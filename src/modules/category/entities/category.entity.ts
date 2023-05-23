
import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "src/modules/images/entities/image.entity"
import { AutoMap } from "@automapper/classes";
import { Product } from "src/modules/products/entities/product.entity";


@Entity()
export class Category extends AbstractEntity {

  @Column()
  @AutoMap()
  name: string;

  @OneToMany(() => Product, (product) => product.category, {
    onDelete: 'CASCADE'
  })
  product : Product[];

}
