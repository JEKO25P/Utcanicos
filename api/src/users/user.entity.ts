import { Role } from '../common/enums/rol.enum';
import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @Column({ unique: true })
    Username: string;

    @Column({ unique: true, nullable: false })
    Email: string;

    @Column({ nullable: false, select: false })
    Password: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;

    @Column({ default: true })
    isActive: boolean;

    @DeleteDateColumn()
    deletedAt: Date;
}