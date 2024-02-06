import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function TablaUsers() {
    //Consultas
    const [Users, setUsers] = useState([])
    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:3000/users")
        setUsers(response.data)
        console.log('Datos de la api')
        console.log(response)
    }
    //Eliminar
    const HandeDelte = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`)

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
            <label className="text-gray-700 font-bold text-2xl">Tabla de usuarios</label>
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
                                            Nombre
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Apellido
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Username
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Correo electronico
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Rol
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
                                    {Users.map((users, i) => (
                                        <tr className='border-b dark:border-gray-700' key={i}>
                                            <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                                {i + 1}
                                            </th>
                                            <td className="px-6 py-4">
                                                {users.Nombre}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Apellido}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Username}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.Email}
                                            </td>
                                            <td className="px-6 py-4">
                                                {users.role}
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-usuario/${users.id}`)}> Editar</label>
                                            </td>
                                            <td className="px-6 py-4">
                                                <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => HandeDelte(users.id)}  >
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