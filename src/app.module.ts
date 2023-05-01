import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CommonModule } from './common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { AuthorizationGuard } from './modules/auth/authorization.guard';
import { UploadModule } from './modules/upload/upload.module';
import { ProductsModule } from './modules/products/products.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    UploadModule,
    JwtService,
    ProductsModule,
    ImagesModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthorizationGuard,
    },
  ],
})
export class AppModule {}