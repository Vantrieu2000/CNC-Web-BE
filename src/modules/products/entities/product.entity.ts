import { AbstractEntity } from "src/common/abstract/entity.abstract";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Image } from "src/modules/images/entities/image.entity"


@Entity()
export class Product extends AbstractEntity {

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  material : string;

  @Column()
  color : string;

  @Column()
  size : string;
 
  @Column()
  description: string;

  @Column()
  detail: string;

  @OneToMany(() => Image, (image) => {image.id}, {
    onDelete: 'CASCADE'
  })
  image : Image[];

}
