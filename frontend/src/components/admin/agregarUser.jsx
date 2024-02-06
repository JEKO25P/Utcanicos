import React, { useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'

export default function AgregarUser() {
    const [Show, setShow] = useState(false)
    return (
        <>
            <label onClick={() => setShow(true)} className="bg-[#8d252e] hover:bg-[#53202b] text-lg flex items-center w-fit p-2 text-gray-300 font-bold hover:text-white  border border-gray-700 hover:border-transparent rounded">Crear usuario</label>
            {Show &&
                <div className="fixed inset-0 flex justify-center items-center bg-black/40">
                    <Formik
                        initialValues={{
                            Nombre: "",
                            Apellido: "",
                            Username: "",
                            Email: "",
                            Password: "",
                            role: ""
                        }}
                        onSubmit={async (values, actions) => {
                            console.log(values)
                            var res = await axios.post('http://localhost:3000/users', values)
                            actions.resetForm()
                            alert('Datos agregados correctamente')
                            window.location = '/tablaUsuarios';
                        }}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <form className="w-full max-w-lg p-4 bg-white rounded" onSubmit={handleSubmit}>
                                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">Crear usuario</label>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Carlos" name="Nombre" onChange={handleChange} value={values.Nombre} />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Apellido</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Escamilla" name="Apellido" onChange={handleChange} value={values.Apellido} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Correo electrónico</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="email" placeholder="ejemplo@email.com" name="Email" onChange={handleChange} value={values.Email} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Contraseña</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="password" placeholder="******" name="Password" onChange={handleChange} value={values.Password} />
                                        <p className="text-gray-600 text-xs italic">Mínimo 6 caracteres</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre de usuario</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Guayabo" name="Username" onChange={handleChange} value={values.Username} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Rol</label>
                                        <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="role" onChange={handleChange} value={values.role}>
                                            <option className="text-gray-700">Roles</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-[#257a8d] hover:bg-[#204a53]  text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mr-4" type='submit'>Agregar</button>
                                    <label onClick={() => setShow(!true)} className="bg-[#8d2525] hover:bg-[#53202f] cursor-pointer text-gray-300 font-semibold hover:text-white p-2 border border-gray-700 hover:border-transparent rounded">Cancelar</label>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            }
        </>
    )
}
