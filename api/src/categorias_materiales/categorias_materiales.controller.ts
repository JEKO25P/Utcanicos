import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import {Categorias_materiales} from './categoria_material.entity';
import { CategoriasMaterialesService } from './categorias_materiales.service';
import { UpdateCategoria_MaterialDto } from './Dto/update-categoria_material';
import { CreateCategoria_MaterialDto } from './Dto/create-categoria_material';

@Controller('categorias_materiales')
export class CategoriasMaterialesController {
    constructor(private categorias_materialesService: CategoriasMaterialesService) {}

    @Get()
    getCategorias_materiales(): Promise<Categorias_materiales[]> {
        return this.categorias_materialesService.getCategorias_materiales();
    }

    @Get(':id')
    getCategoria_material(@Param('id', ParseIntPipe) id: number): Promise<Categorias_materiales> {
        console.log(id)
        console.log(typeof id)
        return this.categorias_materialesService.getCategoria_material(id);
    }

    @Post()
    CreateCategoria_material(@Body() newCategoria_material: CreateCategoria_MaterialDto) {
        return this.categorias_materialesService.createCategoria_material(newCategoria_material);
    }

    @Delete(':id')
    deleteCategoria_material(@Param('id', ParseIntPipe) id: number) {
        return this.categorias_materialesService.deleteCategoria_material(id)
    }

    @Patch(':id')
    updateCategoria_material(@Param('id', ParseIntPipe) id: number, @Body()
    categoria_material: UpdateCategoria_MaterialDto) {
        return this.categorias_materialesService.updateCategoria_material(id, categoria_material)
    }
}
