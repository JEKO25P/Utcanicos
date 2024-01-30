import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TiposTrabajosModule } from './tipos_trabajos/tipos_trabajos.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { CategoriasMaterialesModule } from './categorias_materiales/categorias_materiales.module';
import { MaterialesModule } from './materiales/materiales.module';

@Module({
  imports: [ClientesModule, TiposTrabajosModule, TrabajosModule, CategoriasMaterialesModule, MaterialesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
