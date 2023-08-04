import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "src/modules/images/entities/image.entity"
import { AutoMap } from "@automapper/classes";
import { Category } from "src/modules/category/entities/category.entity";
import { DetailProduct } from "src/modules/detail-product/entities/detail-product.entity";


@Entity()
export class Product extends AbstractEntity {

  @Column()
  @AutoMap()
  name: string;

  @Column()
  @AutoMap()
  price: string;

  @Column()
  @AutoMap()
  material : string;

  @Column()
  @AutoMap()
  color : string;

  @Column()
  @AutoMap()
  size : string;
 
  @Column()
  @AutoMap()
  description: string;

  @Column()
  @AutoMap()
  detail: string;

  @Column()
  @AutoMap()
  categoryId: string;

  @Column()
  @AutoMap()
  detailProductId: string;

  @OneToMany(() => Image, (image) => image.product, {
    onDelete: 'CASCADE'
  })
  image : Image[];

  @OneToMany(() => DetailProduct, (detailProduct) => detailProduct.product, {
    onDelete: 'CASCADE'
  })
  detailProduct : DetailProduct[];

  @ManyToOne(() => Category, (category) => category.product, {
    onDelete: 'CASCADE'
  })
  category : Category;

}
