import { Role } from '../../common/enums/rol.enum';

export class CreateUserDto {
    Nombre: string;
    Apellido: string;
    Username: string;
    Email: string;
    Password: string;
}