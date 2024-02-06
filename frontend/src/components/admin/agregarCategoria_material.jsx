import React, { useState } from "react";
import axios from 'axios'
import { Formik } from 'formik'

export default function AgregarCategoriaMaterial() {
    const [Show, setShow] = useState(false)
    return (
        <>
            <label onClick={() => setShow(true)} className="bg-[#8d252e] hover:bg-[#53202b] text-lg flex items-center w-fit p-2 text-gray-300 font-bold hover:text-white  border border-gray-700 hover:border-transparent rounded">Crear Categoria</label>
            {Show &&
                <div className="fixed inset-0 flex justify-center items-center bg-black/40">
                    <Formik
                        initialValues={{
                            nombre_categoria_material: ""
                        }}
                        onSubmit={async (values, actions) => {
                            console.log(values)
                            var res = await axios.post('http://localhost:3000/categorias_materiales', values)
                            actions.resetForm()
                            alert('Datos agregados correctamente')
                            window.location = '/tablaCategoriasMateriales';
                        }}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <form className="w-full max-w-lg p-4 bg-white rounded" onSubmit={handleSubmit}>
                                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">Crear Categoria de material</label>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre de la categoría</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Accesorios" name="nombre_categoria_material" onChange={handleChange} value={values.nombre_categoria_material} />
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
