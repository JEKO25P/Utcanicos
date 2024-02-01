import { Module } from '@nestjs/common';
import { TrabajosService } from './trabajos.service';
import { TrabajosController } from './trabajos.controller';
import { Trabajos } from './trabajo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajos])],
  providers: [TrabajosService],
  controllers: [TrabajosController],
  exports: [TypeOrmModule, TrabajosService]
})
export class TrabajosModule {}
