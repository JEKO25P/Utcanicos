import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admins } from './admins.entity';
import { CreateAdminDto } from './Dto/create-admin.dto';
import { UpdateAdminDto } from './Dto/update-admin.dto';
import { LoginAdminDto } from './Dto/login-admin.dto';


@Injectable()
export class AdminsService {
    constructor(
        @InjectRepository(Admins) private adminRepository: Repository<Admins>,
    ) { }

    createAdmin(admin: CreateAdminDto) {
        const newAdmin = this.adminRepository.create(admin);
        return this.adminRepository.save(newAdmin);
    }

    getAdmins() {
        return this.adminRepository.find()//find busca todo
    }

    getAdmin(id: number) {
        return this.adminRepository.findOne({//busca mediante id
            where: {
                id
            }
        })
    }

    deleteAdmin(id: number) {
        return this.adminRepository.delete({ id });
    }

    updateAdmin(id: number, admin: UpdateAdminDto) {
        return this.adminRepository.update({ id }, admin)
    }


    findOneByEmail(Email: string) {
        return this.adminRepository.findOneBy({ Email })
    }

    findByEmailWithPassword(Email: string) {
        return this.adminRepository.findOne({
            where: { Email },
            select: ['id', 'Nombre', 'Apellido', 'Adminname', 'Email', 'Password', 'role']
        })
    }

    loginAdmin(user: LoginAdminDto) {
        return this.adminRepository.findOne({
            where: {
                Adminname: user.AdminName,
                Password: user.Password
            }

        })
    }

}