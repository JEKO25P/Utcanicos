import { Module } from '@nestjs/common';
import { TiposTrabajosController } from './tipos_trabajos.controller';
import { TiposTrabajosService } from './tipos_trabajos.service';
import { Tipos_trabajos } from './tipos_trabajos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tipos_trabajos])],
  controllers: [TiposTrabajosController],
  providers: [TiposTrabajosService],
  exports: [TypeOrmModule, TiposTrabajosService]
})
export class TiposTrabajosModule {}
