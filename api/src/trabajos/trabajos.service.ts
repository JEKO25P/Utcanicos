import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trabajos } from './trabajo.entity';
import { UpdateTrabajoDto } from './Dto/update-trabajo';
import { CreateTrabajoDto } from './Dto/create-trabajo';

@Injectable()
export class TrabajosService {
    constructor(
        @InjectRepository(Trabajos) private trabajoRepository: Repository<Trabajos>,
    ){}

    getTrabajos(){
        return this.trabajoRepository.find()
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
