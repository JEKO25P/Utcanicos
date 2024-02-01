import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Tipos_trabajos } from "src/tipos_trabajos/tipos_trabajos.entity";
import { Clientes } from "src/clientes/cliente.entity";

@Entity()
export class Trabajos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    descripcion_trabajo: string;

    @Column()
    fecha_inicio_trabajo: Date;

    @Column()
    fecha_termino_trabajo: Date;

    @Column()
    horas: number;

    @Column()
    estatus: boolean

    @ManyToOne(() => Tipos_trabajos)
    @JoinColumn({ name: "tipo_trabajo_id" }) // Nombre de la columna de la clave foránea
    tipo_trabajo: Tipos_trabajos;

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "cliente_id"})
    nombre_cliente: Clientes;
}