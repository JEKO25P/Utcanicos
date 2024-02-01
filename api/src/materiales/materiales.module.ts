import { Module } from '@nestjs/common';
import { MaterialesService } from './materiales.service';
import { MaterialesController } from './materiales.controller';
import { Materiales } from './material.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Materiales])],
  providers: [MaterialesService],
  controllers: [MaterialesController],
  exports: [TypeOrmModule, MaterialesService]
})
export class MaterialesModule {}
