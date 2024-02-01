import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Message } from 'semantic-ui-react';

export default function Login() {

    const [notificationVisible, setNotificationVisible] = useState(false);
    const [profile, setProfile] = useState(null);
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        correo: '',
        password: '',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token)
            navigate("/perfil")
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues, [name]: value,
        });
    };

    const handleLogin = () => {
        const userData = {
            user: formValues.UserName,
            Password: formValues.Password
        };

        // Realizar la solicitud POST a la API para iniciar sesión
        axios.post("http://localhost:3001/users/login", userData)
            .then(response => {
                if (response.data.message == 'Login exitoso') {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    const decodedToken = jwtDecode(token);

                    if (decodedToken.rol == "Administrador")
                        navigate("/dashboard");
                    else
                        navigate("/");
                } else {
                    setNotificationVisible(true);
                    console.log(response.data.message);
                }
            })
            .catch(error => {
                console.error("Error al iniciar sesión: ");

            });
            
            useEffect(() => {
                let notificationTimeout;
            
                if (notificationVisible) {
                    notificationTimeout = setTimeout(() => {
                        setNotificationVisible(false);
                    }, 5000); // Ocultar la notificación después de 5 segundos
                }
            
                return () => {
                    clearTimeout(notificationTimeout);
                };
            }, [notificationVisible]);
    };
    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-white text-center">LOGIN</h1>
                <br />
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-white">Nombre de usuario:</label>
                        <input type="text" id="username" name="username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required
                            values={formValues.user}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-white">Contraseña:</label>
                        <input type="password" id="password" name="password" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required
                            value={formValues.Password}
                            onChange={handleInputChange}
                        />
                         {notificationVisible && (
                            <Message
                                error
                                header='Error en el formulario'
                                content='Datos no encontrados'
                            />)}
                    </div>
                    <div className="">
                        <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-1" onClick={handleLogin}>Iniciar sesión</button>
                        <Link to={"/"}>
                            <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Regresar</button>
                        </Link>
                    </div>
                    <label className="text-white mr-2">¿No tienes una cuenta?</label>
                    <Link to={"/Registro"}>Resgistrar</Link>
                </form>
            </div>
        </div>
    );
}

