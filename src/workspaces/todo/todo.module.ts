import { Module } from '@nestjs/common';
import { ProductsModule } from './module/products/products.module';

@Module({
  imports: [ProductsModule],
  exports: [ProductsModule]
})
export class TodoModule {}
