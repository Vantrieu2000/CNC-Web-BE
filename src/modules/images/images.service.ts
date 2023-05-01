import { Injectable } from "@nestjs/common";
import { CreateImageDto } from "./dto/create-image.dto";
import { UpdateImageDto } from "./dto/update-image.dto";
import { Image } from "./entities/image.entity";
import { ImageRepository } from "./images.repository";

@Injectable()
export class ImagesService {
  constructor(private imageRepository: ImageRepository) {}

  create(createImageDto: CreateImageDto) {
    return "This action adds a new image";
  }

  async findAll(): Promise<Image[]> {
    const image = this.imageRepository.createQueryBuilder("images").where("images.deletedAt is null").getMany();
    return image;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
