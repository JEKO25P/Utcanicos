import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clientes } from './cliente.entity';
import { UpdateClienteDto } from './Dto/update-cliente';
import { CreateClienteDto } from './Dto/create-cliente';

@Injectable()
export class ClientesService {
    constructor(
        @InjectRepository(Clientes) private clienteRepository: Repository<Clientes>,
    ){}

    getClientes(){
        return this.clienteRepository.find()
    }

    getCliente(id: number){
        return this.clienteRepository.findOne({
            where: {
                id
            }
        })
    }

    createCliente(cliente: CreateClienteDto) {
        const newCliente = this.clienteRepository.create(cliente);
        return this.clienteRepository.save(newCliente);
    }

    deleteCliente(id: number) {
        return this.clienteRepository.delete({ id }); 
    }

    updateCliente(id: number, cliente: UpdateClienteDto){
        return this.clienteRepository.update({id}, cliente)
    }
}
