import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AgregarMaterial from "../../components/admin/agregarMaterial";

export default function TablaMateriales() {
    const [Materiales, setMateriales] = useState([]);
    useEffect(() => {
        fetchMateriales();
    }, []);

    const fetchMateriales = async () => {
        try {
            const response = await axios.get("http://localhost:3000/materiales");
            setMateriales(response.data);
        } catch (error) {
            console.error("Error fetching materiales:", error);
        }
    };

    const HandeDelte = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/materiales/${id}`);
            if (response.status === 200) {
                alert("Se borró correctamente");
            } else {
                alert("Ocurrió un error al intentar borrar el material");
            }
            fetchMateriales();
        } catch (error) {
            console.error("Error deleting material:", error);
        }
    };

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-4xl">
                <label className="text-gray-700 font-bold text-2xl mb-4 block">Tabla de materiales</label>
                <div className="border border-gray-300 rounded overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">#</th>
                                <th scope="col" className="px-6 py-3">Nombre de material</th>
                                <th scope="col" className="px-6 py-3">Precio</th>
                                <th scope="col" className="px-6 py-3">Inventario</th>
                                <th scope="col" className="px-6 py-3">Nombre de categoría del material</th>
                                <th scope="col" className="px-6 py-3">Editar</th>
                                <th scope="col" className="px-6 py-3">Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Materiales.map((materiales, contador) => (
                                <tr key={materiales.id} className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{contador + 1}</th>
                                    <td className="px-6 py-4">{materiales.nombre_material}</td>
                                    <td className="px-6 py-4">{materiales.precio}</td>
                                    <td className="px-6 py-4">{materiales.inventario}</td>
                                    <td className="px-6 py-4">{materiales.categoria_material ? materiales.categoria_material.nombre_categoria_material : "Sin categoría"}</td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-material/${materiales.id}`)}>Editar</label>
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(materiales.id)}>Borrar</label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AgregarMaterial />
            </div>
        </div>
    );
}
