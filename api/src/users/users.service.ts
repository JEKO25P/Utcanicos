import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { CreateUserDto } from './Dto/create-user.dto';
import { UpdateUserDto } from './Dto/update-user.dto'
import { LoginUserDto } from './Dto/login-user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private userRepository: Repository<Users>,
    ) { }

    createUser(user: CreateUserDto) {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }

    getUsers() {
        return this.userRepository.find()//find busca todo
    }

    getUser(id: number) {
        return this.userRepository.findOne({//busca mediante id
            where: {
                id
            }
        })
    }

    deleteUser(id: number) {
        return this.userRepository.delete({ id });
    }

    updateUser(id: number, user: UpdateUserDto) {
        return this.userRepository.update({ id }, user)
    }


    findOneByEmail(Email: string) {
        return this.userRepository.findOneBy({ Email })
    }

    findByEmailWithPassword(Email: string) {
        return this.userRepository.findOne({
            where: { Email },
            select: ['id', 'Nombre', 'Apellido', 'Username', 'Email', 'Password', 'role']
        })
    }

    loginUser(user: LoginUserDto) {
        return this.userRepository.findOne({
            where: {
                Username: user.UserName,
                Password: user.Password
            }

        })
    }

}