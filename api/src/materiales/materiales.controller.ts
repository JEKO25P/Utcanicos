import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Materiales } from './material.entity';
import { MaterialesService } from './materiales.service';
import { UpdateMaterialDto } from './Dto/update-material';
import { CreateMaterialDto } from './Dto/create-material';

@Controller('materiales')
export class MaterialesController {
    constructor(private materialesService: MaterialesService) {}

    @Get()
    getMateriales(): Promise<Materiales[]> {
        return this.materialesService.getMaterialesWithRelations();
    }

    @Get(':id')
    getMaterial(@Param('id', ParseIntPipe) id: number): Promise<Materiales> {
        return this.materialesService.getMaterial(id);
    }

    @Post()
    createMaterial(@Body() newMaterial: CreateMaterialDto) {
        return this.materialesService.createMaterial(newMaterial);
    }

    @Delete(':id')
    deleteMaterial(@Param('id', ParseIntPipe) id: number) {
        return this.materialesService.deleteMaterial(id);
    }

    @Patch(':id')
    updateMaterial(@Param('id', ParseIntPipe) id: number, @Body() material: UpdateMaterialDto) {
        return this.materialesService.updateMaterial(id, material);
    }
}
