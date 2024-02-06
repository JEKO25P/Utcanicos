// TablaUsers.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import AgregarUser from "../../components/admin/agregarUser";

export default function TablaUsers() {
    // Consultas
    const [Users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
        console.log('Datos de la api');
        console.log(response);
    };

    // Eliminar
    const handleDelete = async (id) => {
        const response = await axios.delete(`http://localhost:3000/users/${id}`);

        if (response.status === 200) {
            alert("Se borró correctamente");
        } else {
            alert("Un show medio raro");
        }
        fetchUsers();
    };

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-full max-w-4xl">
                <label className="text-gray-700 font-bold text-2xl mb-4 block">Tabla de usuarios</label>
                <div className="border border-gray-300 rounded overflow-hidden">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                            {Users.map((user, index) => (
                                <tr className='border-b border-gray-200 dark:border-gray-700' key={index}>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                                        {index + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {user.Nombre}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.Apellido}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.Username}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.Email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {user.role}
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer" onClick={() => navigate(`/editar-usuario/${user.id}`)}> Editar</label>
                                    </td>
                                    <td className="px-6 py-4">
                                        <label className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer" onClick={() => handleDelete(user.id)}>
                                            Borrar
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AgregarUser />
            </div>
        </div>
    );
}
