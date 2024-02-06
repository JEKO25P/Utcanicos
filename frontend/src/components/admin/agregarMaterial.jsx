// AgregarMaterial.jsx
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Formik } from 'formik';

export default function AgregarMaterial() {
    const [Show, setShow] = useState(false);
    const [categoriasMaterial, setCategoriasMaterial] = useState([]);

    useEffect(() => {
        fetchCategoriasMaterial();
    }, []);

    const fetchCategoriasMaterial = async () => {
        try {
            const response = await axios.get("http://localhost:3000/categorias_materiales");
            setCategoriasMaterial(response.data);
        } catch (error) {
            console.error("Error fetching categorias de materiales:", error);
        }
    };

    return (
        <>
            <label onClick={() => setShow(true)} className="bg-[#8d252e] hover:bg-[#53202b] text-lg flex items-center w-fit p-2 text-gray-300 font-bold hover:text-white  border border-gray-700 hover:border-transparent rounded">Crear material</label>
            {Show &&
                <div className="fixed inset-0 flex justify-center items-center bg-black/40">
                    <Formik
                        initialValues={{
                            nombre_material: "",
                            precio: "",
                            inventario: "",
                            nombre_categoria_material: "",
                        }}
                        onSubmit={async (values, actions) => {
                            console.log(values);
                            try {
                                const res = await axios.post('http://localhost:3000/materiales', values);
                                actions.resetForm();
                                alert('Datos agregados correctamente');
                                window.location = '/tablaMateriales';
                            } catch (error) {
                                console.error("Error al agregar material:", error);
                            }
                        }}
                    >
                        {({ handleChange, handleSubmit, values }) => (
                            <form className="w-full max-w-lg p-4 bg-white rounded" onSubmit={handleSubmit}>
                                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">Crear material</label>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre de material</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Anticogelante" name="nombre_material" onChange={handleChange} value={values.nombre_material} />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Precio</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="5000" name="precio" onChange={handleChange} value={values.precio} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Inventario</label>
                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="number" placeholder="6" name="inventario" onChange={handleChange} value={values.inventario} />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Categoria material</label>
                                        <select className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="nombre_categoria_material" onChange={handleChange} value={values.nombre_categoria_material}>
                                            <option value="">Seleccionar categoría</option>
                                            {categoriasMaterial.map((categoria) => (
                                                <option key={categoria.id} value={categoria.nombre_categoria_material}>
                                                    {categoria.nombre_categoria_material}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <button className="bg-[#257a8d] hover:bg-[#204a53]  text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded mr-4" type='submit'>Agregar</button>
                                    <label onClick={() => setShow(false)} className="bg-[#8d2525] hover:bg-[#53202f] cursor-pointer text-gray-300 font-semibold hover:text-white p-2 border border-gray-700 hover:border-transparent rounded">Cancelar</label>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            }
        </>
    );
}
