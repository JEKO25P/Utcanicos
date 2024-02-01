import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tipos_trabajos{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_tipo_trabajo: string;
}