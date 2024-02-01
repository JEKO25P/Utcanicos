import React from "react";
import { Link } from "react-router-dom";

export default function Registrar() {

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-black">
                <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                    <h1 className="text-white text-center">REGISTRO</h1>
                    <br />
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-white">Correo electronico:</label>
                            <input type="text" id="username" name="username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="text-white">Nombre de usuario:</label>
                            <input type="text" id="username" name="username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-white">Contraseña:</label>
                            <input type="password" id="password" name="password" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required />
                        </div>
                        <div className="">
                            <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-1">Crear cuenta</button>

                            <Link to={"/"}>
                                <button type="submit" className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Regresar</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}