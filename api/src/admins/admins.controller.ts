import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { Admins } from './admins.entity';
import { CreateAdminDto } from './Dto/create-admin.dto';
import { AdminsService } from './admins.service';
import { UpdateAdminDto } from './Dto/update-admin.dto';
import { LoginAdminDto } from './Dto/login-admin.dto';

@Controller('admins')
export class AdminsController {
    constructor(private adminService: AdminsService) { }

    @Get()
    getAdmins(): Promise<Admins[]> {
        return this.adminService.getAdmins();
    }

    @Get(':id')
    getAdmin(@Param('id', ParseIntPipe) id: number): Promise<Admins> {
        console.log(id)
        console.log(typeof id)
        return this.adminService.getAdmin(id);
    }

    @Post()
    CreateAdmin(@Body() newAdmin: CreateAdminDto) {
        return this.adminService.createAdmin(newAdmin);
    }

    @Delete(':id')
    deleteAdmin(@Param('id', ParseIntPipe) id: number) {
        return this.adminService.deleteAdmin(id)
    }

    @Patch(':id')
    updateAdmin(@Param('id', ParseIntPipe) id: number, @Body()
    admin: UpdateAdminDto) {
        return this.adminService.updateAdmin(id, admin)
    }



    @Get('login')
    loginAdmin(@Body() newAdmin: LoginAdminDto) {

        console.log(newAdmin)
        return this.adminService.loginAdmin(newAdmin)
    }
}

