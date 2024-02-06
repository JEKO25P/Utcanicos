import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Message } from "semantic-ui-react";

export default function Registrar() {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        Nombre: '',
        Apellido: '',
        Email: '',
        Password: '',
        Username: '',
    });

    const handleRegistro = async (e) => {
        e.preventDefault();
        setNotificationVisible(false);
        setError(false);

        // Verificar que ingrese todos los datos
        if (!formValues.Email || !formValues.Password || !formValues.Username || !formValues.Nombre || !formValues.Apellido) {
            setNotificationVisible(true);
            return;
        }

        try {


            await axios.post("http://localhost:3000/users", formValues);
            setSuccess(true);

            setTimeout(() => {
                navigate("/");
            }, 3000);


        } catch (error) {
            console.error("Error al registrar usuario", error.response ? error.response.data : error.message);
            setError(true);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                    <h1 className="text-white text-center">REGISTRO</h1>
                    <br />
                    <form onSubmit={handleRegistro}>
                        <div className="mb-4">
                            <label className="text-white">Nombre</label>
                            <input type="text" name="Nombre" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2"
                                required
                                value={formValues.Nombre}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Apellido</label>
                            <input type="text" name="Apellido" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2"
                                required
                                value={formValues.Apellido}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Correo electrónico</label>
                            <input type="email" name="Email" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2"
                                required
                                value={formValues.Email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Nombre de usuario</label>
                            <input type="text" name="Username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2"
                                required
                                value={formValues.Username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="text-white">Contraseña:</label>
                            <input type="password" name="Password" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2"
                                required
                                value={formValues.Password}
                                onChange={handleInputChange}
                            />
                            {notificationVisible && (
                                <Message
                                    error
                                    header='Error en el formulario'
                                    content='Por favor, completa todos los campos.'
                                />
                            )}
                            {error && (
                                <Message
                                    error
                                    header='Error al crear la cuenta'
                                    content='Existe una cuenta con el mismo correo.'
                                />
                            )}
                            {success && (
                                <Message
                                    positive
                                    header='Registro exitoso'
                                    content='La cuenta se ha creado correctamente. Redireccionando...'
                                />
                            )}
                        </div>
                        <div className="">
                            <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-1">Crear cuenta</button>
                            <Link to={"/"}>
                                <button type="button" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Regresar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}
