import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categorias_materiales } from './categoria_material.entity';
import { UpdateCategoria_MaterialDto } from './Dto/update-categoria_material';
import { CreateCategoria_MaterialDto } from './Dto/create-categoria_material';

@Injectable()
export class CategoriasMaterialesService {
    constructor(
        @InjectRepository(Categorias_materiales) private categoria_materialRepository: Repository<Categorias_materiales>,
    ){}

    getCategorias_materiales(){
        return this.categoria_materialRepository.find()
    }

    getCategoria_material(id: number){
        return this.categoria_materialRepository.findOne({
            where: {
                id
            }
        })
    }

    createCategoria_material(categoria_material: CreateCategoria_MaterialDto) {
        const newCategoria_material = this.categoria_materialRepository.create(categoria_material);
        return this.categoria_materialRepository.save(newCategoria_material);
    }

    deleteCategoria_material(id: number) {
        return this.categoria_materialRepository.delete({ id }); 
    }

    updateCategoria_material(id: number, categoria_material: UpdateCategoria_MaterialDto){
        return this.categoria_materialRepository.update({id}, categoria_material)
    }
}
