import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { CommonModule } from "./common/common.module";
import { AuthModule } from "./modules/auth/auth.module";
import { AuthorizationGuard } from "./modules/auth/authorization.guard";
import { CategoryModule } from "./modules/category/category.module";
import { DetailProductModule } from "./modules/detail-product/detail-product.module";
import { ImagesModule } from "./modules/images/images.module";
import { ProductsModule } from "./modules/products/products.module";
import { UploadModule } from "./modules/upload/upload.module";

@Module({
  imports: [CommonModule, AuthModule, UploadModule, ProductsModule, ImagesModule, CategoryModule, DetailProductModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthorizationGuard,
    },
  ],
})
export class AppModule {}
