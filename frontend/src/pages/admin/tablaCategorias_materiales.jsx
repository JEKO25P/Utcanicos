import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import AgregarCategoriaMaterial from "../../components/admin/agregarCategoria_material";

export default function TablaCategoriasMateriales() {
    //Consultas
    const [Categorias_materiales, setCategoriasMateriales] = useState([])
    useEffect(() => {
        fetchCategoriasMateriales();
    }, [])

    const fetchCategoriasMateriales = async () => {
        const response = await axios.get("http://localhost:3000/categorias_materiales")
        setCategoriasMateriales(response.data)
        console.log('Datos de la api')
        console.log(response)
    }

    //Eliminar
    const HandeDelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/categorias_materiales/${id}`)

        if (response.status === 200) {
            alert("Se borró correctamente")
        } else {
            alert("Ocurrió un error al intentar borrar la categoría")
        }
        fetchCategoriasMateriales()
    }

    const navigate = useNavigate()

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-4xl">
                <label className="text-gray-700 font-bold text-2xl mb-4 block">Tabla de Categorías de Materiales</label>
                <div className="border border-gray-300 rounded overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-900 uppercase dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre de categoría
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
                            {Categorias_materiales.map((categoria, index) => (
                                <tr key={categoria.id} className="border-b dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {categoria.nombre_categoria_material}
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-categoria_material/${categoria.id}`)}>Editar</label>
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelete(categoria.id)}>Borrar</label>
                                    </td> 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AgregarCategoriaMaterial/>
            </div>
        </div>
    )
}
