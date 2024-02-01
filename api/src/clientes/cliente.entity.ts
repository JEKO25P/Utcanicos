import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clientes{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_cliente: string;

    @Column({unique: true})
    Telefono: string;
}