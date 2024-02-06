import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materiales } from './material.entity';
import { UpdateMaterialDto } from './Dto/update-material';
import { CreateMaterialDto } from './Dto/create-material';

@Injectable()
export class MaterialesService {
    constructor(
        @InjectRepository(Materiales) private materialRepository: Repository<Materiales>,
    ){}

    async getMaterialesWithRelations(): Promise<Materiales[]>{
        return this.materialRepository.createQueryBuilder('materiales')
        .leftJoinAndSelect('materiales.categoria_material', 'categoria_material')
        .getMany();
    }

    getMaterial(id: number){
        return this.materialRepository.findOne({
            where: {
                id
            }
        })
    }

    createMaterial(material: CreateMaterialDto) {
        const newMaterial = this.materialRepository.create(material);
        return this.materialRepository.save(newMaterial);
    }

    deleteMaterial(id: number) {
        return this.materialRepository.delete({ id }); 
    }

    updateMaterial(id: number, material: UpdateMaterialDto){
        return this.materialRepository.update({id}, material)
    }
}
