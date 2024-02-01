import { Categorias_materiales } from "../../categorias_materiales/categoria_material.entity";

export class CreateMaterialDto {
    nombre_material: string;
    precio: number;
    inventario: number;
    categoria_material: Categorias_materiales;
}
