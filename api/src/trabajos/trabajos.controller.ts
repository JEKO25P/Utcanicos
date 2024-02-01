import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import {Trabajos} from './trabajo.entity';
import { TrabajosService } from './trabajos.service';
import { UpdateTrabajoDto } from './Dto/update-trabajo';
import { CreateTrabajoDto } from './Dto/create-trabajo';

@Controller('trabajos')
export class TrabajosController {
    constructor(private trabajosService: TrabajosService) {}

    @Get()
    getTrabajos(): Promise<Trabajos[]> {
        return this.trabajosService.getTrabajos();
    }

    @Get(':id')
    getTrabajo(@Param('id', ParseIntPipe) id: number): Promise<Trabajos> {
        console.log(id)
        console.log(typeof id)
        return this.trabajosService.getTrabajo(id);
    }

    @Post()
    createTrabajo(@Body() newTrabajo: CreateTrabajoDto) {
        return this.trabajosService.createTrabajo(newTrabajo);
    }

    @Delete(':id')
    deleteTrabajo(@Param('id', ParseIntPipe) id: number) {
        return this.trabajosService.deleteTrabajo(id)
    }

    @Patch(':id')
    updateTrabajo(@Param('id', ParseIntPipe) id: number, @Body()
    trabajo: UpdateTrabajoDto) {
        return this.trabajosService.updateTrabajo(id, trabajo)
    }
}
