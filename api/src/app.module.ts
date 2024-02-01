import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TiposTrabajosModule } from './tipos_trabajos/tipos_trabajos.module';
import { TrabajosModule } from './trabajos/trabajos.module';
import { CategoriasMaterialesModule } from './categorias_materiales/categorias_materiales.module';
import { MaterialesModule } from './materiales/materiales.module';
import { UsersModule } from './users/users.module';
import { AdminsModule } from './admins/admins.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'utecanicos',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClientesModule,
    TiposTrabajosModule,
    TrabajosModule,
    CategoriasMaterialesModule,
    MaterialesModule,
    UsersModule,
    AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
