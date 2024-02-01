import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Categorias_materiales } from "../categorias_materiales/categoria_material.entity";

@Entity()
export class Materiales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_material: string;

    @Column("double")
    precio: number;

    @Column()
    inventario: number;

    @ManyToOne(() => Categorias_materiales)
    @JoinColumn({ name: "categoria_material_id" }) // Nombre de la columna de la clave foránea
    categoria_material: Categorias_materiales;
}
