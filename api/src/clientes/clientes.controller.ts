import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Clientes } from './cliente.entity';
import { ClientesService } from './clientes.service';
import { UpdateClienteDto } from './Dto/update-cliente';
import { CreateClienteDto } from './Dto/create-cliente';

@Controller('clientes')
export class ClientesController {
    constructor(private clientesService: ClientesService) {}

    @Get()
    getClientes(): Promise<Clientes[]> {
        return this.clientesService.getClientes();
    }

    @Get(':id')
    getCliente(@Param('id', ParseIntPipe) id: number): Promise<Clientes> {
        console.log(id)
        console.log(typeof id)
        return this.clientesService.getCliente(id);
    }

    @Post()
    CreateCliente(@Body() newCliente: CreateClienteDto) {
        return this.clientesService.createCliente(newCliente);
    }

    @Delete(':id')
    deleteCliente(@Param('id', ParseIntPipe) id: number) {
        return this.clientesService.deleteCliente(id)
    }

    @Patch(':id')
    updateCliente(@Param('id', ParseIntPipe) id: number, @Body()
    categoria_material: UpdateClienteDto) {
        return this.clientesService.updateCliente(id, categoria_material)
    }
}
