import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { Message } from 'semantic-ui-react';

export default function Login() {
    const [notificationVisible, setNotificationVisible] = useState(false);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        Username: '',
        Password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/users/login", formValues);
            console.error("Error al iniciar sesión: ", error);
            if (response.data.message === 'Login exitoso') {
                // Inicio de sesión exitoso
                localStorage.setItem('token', response.data.token);
                navigate("/app");
            } else {
                // Error en el inicio de sesión
                setNotificationVisible(true);
            }
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            setNotificationVisible(true);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-white text-center">LOGIN</h1>
                <br />
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="text-white">Nombre de usuario:</label>
                        <input type="text" name="Username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required
                            value={formValues.Username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-white">Contraseña:</label>
                        <input type="password" name="Password" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required
                            value={formValues.Password}
                            onChange={handleInputChange}
                        />
                        {notificationVisible && (
                            <Message
                                error
                                header='Error en el formulario'
                                content='Credenciales incorrectas'
                            />
                        )}
                    </div>
                    <div className="">
                        <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-1">Iniciar sesión</button>
                        <Link to={"/app"}>
                            <button type="button" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Regresar</button>
                        </Link>
                    </div>
                    <label className="text-white mr-2">¿No tienes una cuenta?</label>
                    <Link to={"/Registro"}>Registrar</Link>
                </form>
            </div>
        </div>
    );
}
