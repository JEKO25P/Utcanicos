import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { Admins } from './admins.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Admins])],
  providers: [AdminsService],
  controllers: [AdminsController],
  exports: [TypeOrmModule, AdminsService],
})
export class AdminsModule {}
