import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function TablaTiposTrabajos() {
    //Consultas
    const [Tipos_trabajos, setUsers] = useState([])
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:3000/tipos_trabajos")
        setUsers(response.data)
        console.log('Datos de la api')
        console.log(response)
    }
    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/tipos_trabajos/${id}`)

        if (response.status == 200) {
            alert("Se borro correctamente")
        } else {
            alert("Un show medio raro")
        }
        fetchUsers()
    }
    const navigate = useNavigate()
    return (
        <div className="text-black ">
            <label className="text-gray-700 font-bold text-2xl">Tabla de Categorias de materiales</label>
            <div className=" border-dashed">
                <div className="flex items-center justify-center h-fit mb-4 rounded flex-col gap-6">
                    <div className="container">
                        <div className="">
                            <table className="w-fit text-sm text-left text-gray-500 dark:text-gray-400">
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
                                    {Tipos_trabajos.map((tipos_trabajos, contador) => (
                                        <tr key={tipos_trabajos.id} className="border-b dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {contador + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {tipos_trabajos.nombre_tipo_trabajo}
                                            </td>

                                            <td className="px-6 py-4">
                                                <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-tipo_trabajo/${tipos_trabajos.id}`)}> Editar</label>
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(tipos_trabajos.id)}  >
                                                    Borrar
                                                </label>
                                            </td> 
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}