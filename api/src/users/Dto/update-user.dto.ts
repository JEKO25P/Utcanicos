import { Role } from '../../common/enums/rol.enum';

export class UpdateUserDto {
    Nombre?: string;
    Apellido?: string;
    Password?: string;
    Username?: string;
    role?: Role;
}