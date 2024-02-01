import { Module } from '@nestjs/common';
import { CategoriasMaterialesService } from './categorias_materiales.service';
import { CategoriasMaterialesController } from './categorias_materiales.controller';
import { Categorias_materiales } from './categoria_material.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Categorias_materiales])],
  providers: [CategoriasMaterialesService],
  controllers: [CategoriasMaterialesController],
  exports: [TypeOrmModule, CategoriasMaterialesService]
})
export class CategoriasMaterialesModule {}
