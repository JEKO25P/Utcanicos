import { Tipos_trabajos } from "src/tipos_trabajos/tipos_trabajos.entity";
import { Clientes } from "src/clientes/cliente.entity";

export class UpdateTrabajoDto {
    descripcion_trabajo?: string;
    fecha_inicio_trabajo?: Date;
    fecha_termino_trabajo?: Date;
    horas?: number;
    estatus?: boolean;
    tipo_trabajo?: Tipos_trabajos;
    nombre_cliente?: Clientes;
}
