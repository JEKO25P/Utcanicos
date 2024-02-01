import { Categorias_materiales } from "../../categorias_materiales/categoria_material.entity";

export class UpdateMaterialDto {
    nombre_material?: string;
    precio?: number;
    inventario?: number;
    categoria_material?: Categorias_materiales;
}
