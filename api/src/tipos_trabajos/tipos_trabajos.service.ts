import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipos_trabajos } from './tipos_trabajos.entity';
import { UpdateTipo_TrabajoDto } from './Dto/update-tipo_trabajo';
import { CreateTipo_TrabajoDto } from './Dto/create-tipo_trabajo';

@Injectable()
export class TiposTrabajosService {
    constructor(
        @InjectRepository(Tipos_trabajos) private tipo_trabajoRepository: Repository<Tipos_trabajos>,
    ){}

    getTipos_trabajos(){
        return this.tipo_trabajoRepository.find()
    }

    getTipo_trabajo(id: number){
        return this.tipo_trabajoRepository.findOne({
            where: {
                id
            }
        })
    }

    createTipo_trabajo(tipo_trabajo: CreateTipo_TrabajoDto) {
        const newTipo_trabajo = this.tipo_trabajoRepository.create(tipo_trabajo);
        return this.tipo_trabajoRepository.save(newTipo_trabajo);
    }

    deleteTipo_trabajo(id: number) {
        return this.tipo_trabajoRepository.delete({ id }); 
    }

    updateTipo_trabajo(id: number, tipo_trabajo: UpdateTipo_TrabajoDto){
        return this.tipo_trabajoRepository.update({id}, tipo_trabajo)
    }
}
