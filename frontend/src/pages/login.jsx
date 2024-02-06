import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-black-500">
            <div className="bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
                <h1 className="text-white text-center">LOGIN</h1>
                <br />
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-white">Nombre de usuario:</label>
                        <input type="text" id="username" name="username" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-white">Contraseña:</label>
                        <input type="password" id="password" name="password" className="block w-full border-gray-300 rounded-md bg-slate-600 text-white p-2" required />
                    </div>
                    <div className="">
                        <button type="submit" className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-1">Iniciar sesión</button>
                        <Link to={"/"}>
                            <button type="submit" className="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Regresar</button>
                        </Link>
                    </div>
                    <label className="mr-2">¿No tienes una cuenta?</label>
                    <Link to={"/Registro"}>Resgistrar</Link>
                </form>
            </div>|
        </div>
    );
}
