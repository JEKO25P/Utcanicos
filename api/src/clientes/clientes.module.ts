import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { Clientes } from './cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Clientes])],
    providers: [ClientesService],
    controllers: [ClientesController],
    exports: [TypeOrmModule, ClientesService],
})
export class ClientesModule {}
