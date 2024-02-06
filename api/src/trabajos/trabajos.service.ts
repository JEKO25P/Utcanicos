import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trabajos } from './trabajo.entity';
import { CreateTrabajoDto } from './Dto/create-trabajo';
import { UpdateTrabajoDto } from './Dto/update-trabajo';

@Injectable()
export class TrabajosService {
    constructor(
        @InjectRepository(Trabajos) private trabajoRepository: Repository<Trabajos>,
    ){}

    async getTrabajosWithRelations(): Promise<Trabajos[]> {
        return this.trabajoRepository.createQueryBuilder('trabajos')
            .leftJoinAndSelect('trabajos.tipo_trabajo', 'tipo_trabajo')
            .leftJoinAndSelect('trabajos.nombre_cliente', 'nombre_cliente')
            .leftJoinAndSelect('trabajos.material', 'material')
            .getMany();
    }

    getTrabajo(id: number){
        return this.trabajoRepository.findOne({
            where: {
                id
            }
        })
    }

    createTrabajo(trabajo: CreateTrabajoDto) {
        const newTrabajo = this.trabajoRepository.create(trabajo);
        return this.trabajoRepository.save(newTrabajo);
    }

    deleteTrabajo(id: number) {
        return this.trabajoRepository.delete({ id }); 
    }

    updateTrabajo(id: number, trabajo: UpdateTrabajoDto){
        return this.trabajoRepository.update({id}, trabajo)
    }
}
