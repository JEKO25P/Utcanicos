import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorias_materiales{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_categoria_material: string;
}