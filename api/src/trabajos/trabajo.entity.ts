import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { Tipos_trabajos } from "src/tipos_trabajos/tipos_trabajos.entity";
import { Clientes } from "src/clientes/cliente.entity";
import { Materiales } from "src/materiales/material.entity";

@Entity()
export class Trabajos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre_trabajo: string;

    @Column("text")
    descripcion_trabajo: string;

    @CreateDateColumn({ type: "timestamp" })
    fecha_inicio_trabajo: Date;

    @Column()
    fecha_termino_trabajo: Date;

    @Column()
    horas: number;

    @Column()
    estatus: boolean;

    @Column()
    imagen_trabajo: string;

    @ManyToOne(() => Materiales)
    @JoinColumn({name: "material_id"})
    material: Materiales;

    @ManyToOne(() => Tipos_trabajos)
    @JoinColumn({ name: "tipo_trabajo_id" })
    tipo_trabajo: Tipos_trabajos;

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "cliente_id"})
    nombre_cliente: Clientes;
}
