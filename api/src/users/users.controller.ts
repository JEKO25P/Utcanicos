import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { Users } from './user.entity';
import { CreateUserDto } from './Dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './Dto/update-user.dto';
import { LoginUserDto } from './Dto/login-user.dto';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(): Promise<Users[]> {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<Users> {
        console.log(id)
        console.log(typeof id)
        return this.usersService.getUser(id);
    }

    @Post()
    CreateUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(newUser);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body()
    user: UpdateUserDto) {
        return this.usersService.updateUser(id, user)
    }

    @Post('login')
    async loginUser(@Body() loginUserDto: LoginUserDto) {
        try {
            const token = await this.usersService.loginUser(loginUserDto);
            return { message: 'Login exitoso', token };
        } catch (error) {
            throw new HttpException('Credenciales incorrectas', HttpStatus.UNAUTHORIZED);
        }
    }
}