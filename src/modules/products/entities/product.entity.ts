import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "src/modules/images/entities/image.entity"
import { AutoMap } from "@automapper/classes";


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

  @OneToMany(() => Image, (image) => image.product, {
    onDelete: 'CASCADE'
  })
  image : Image[];

}
