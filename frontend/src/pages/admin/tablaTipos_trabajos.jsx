// TablaTiposTrabajos.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AgregarTipoTrabajo from "../../components/admin/agregarTipo_trabajo";

export default function TablaTiposTrabajos() {
    // Consultas
    const [Tipos_trabajos, setTiposTrabajos] = useState([]);
    useEffect(() => {
        fetchTiposTrabajos();
    }, []);

    const fetchTiposTrabajos = async () => {
        const response = await axios.get("http://localhost:3000/tipos_trabajos");
        setTiposTrabajos(response.data);
        console.log('Datos de la api');
        console.log(response);
    };

    // Eliminar
    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/tipos_trabajos/${id}`);

        if (response.status === 200) {
            alert("Se borró correctamente");
        } else {
            alert("Un show medio raro");
        }
        fetchTiposTrabajos();
    };

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-4xl">
                <label className="text-gray-700 font-bold text-2xl">Tabla Tipos de trabajos</label>
                <div className="border border-gray-300 rounded overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre de tipo de trabajo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Editar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Borrar
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {Tipos_trabajos.map((tipo_trabajo, contador) => (
                                <tr key={tipo_trabajo.id} className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {contador + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {tipo_trabajo.nombre_tipo_trabajo}
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-tipo_trabajo/${tipo_trabajo.id}`)}> Editar</label>
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => handleDelete(tipo_trabajo.id)}>
                                            Borrar
                                        </label>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AgregarTipoTrabajo/>
            </div>
        </div>
    );
}
