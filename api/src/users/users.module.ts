import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users]),
    JwtModule.register({
        secret: 'x@das87199214126ytwr#_00ZX0C021asefasefaH', 
        signOptions: { expiresIn: '3h' }, // Set the expiration time for the token
    })],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [TypeOrmModule, UsersService ],
})
export class UsersModule {}