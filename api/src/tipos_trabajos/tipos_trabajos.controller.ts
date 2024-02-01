import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Tipos_trabajos } from './tipos_trabajos.entity';
import { TiposTrabajosService } from './tipos_trabajos.service';
import { UpdateTipo_TrabajoDto } from './Dto/update-tipo_trabajo';
import { CreateTipo_TrabajoDto } from './Dto/create-tipo_trabajo';

@Controller('tipos_trabajos')
export class TiposTrabajosController {
    constructor(private tipos_trabajosService: TiposTrabajosService) {}

    @Get()
    getTipos_trabajos(): Promise<Tipos_trabajos[]> {
        return this.tipos_trabajosService.getTipos_trabajos();
    }

    @Get(':id')
    getTipo_trabajo(@Param('id', ParseIntPipe) id: number): Promise<Tipos_trabajos> {
        console.log(id)
        console.log(typeof id)
        return this.tipos_trabajosService.getTipo_trabajo(id);
    }

    @Post()
    CreateTipo_Trabajo(@Body() newTipo_trabajo: CreateTipo_TrabajoDto) {
        return this.tipos_trabajosService.createTipo_trabajo(newTipo_trabajo);
    }

    @Delete(':id')
    deleteTipo_trabajo(@Param('id', ParseIntPipe) id: number) {
        return this.tipos_trabajosService.deleteTipo_trabajo(id)
    }

    @Patch(':id')
    updateTipo_trabajo(@Param('id', ParseIntPipe) id: number, @Body()
    tipo_trabajo: UpdateTipo_TrabajoDto) {
        return this.tipos_trabajosService.updateTipo_trabajo(id, tipo_trabajo)
    }
}
