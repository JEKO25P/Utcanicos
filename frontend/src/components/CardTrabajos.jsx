import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CardTrabajos({ tipo_trabajo }) {
  const [trabajos, setTrabajos] = useState([]);

  useEffect(() => {
    console.log("Tipo de trabajo ID:", tipo_trabajo);
    fetchTrabajosPorTipo();
  }, [tipo_trabajo]);

  const fetchTrabajosPorTipo = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/trabajos?tipo_trabajo=${tipo_trabajo}`);
      console.log("Datos devueltos por la API:", response.data); // Imprimir los datos devueltos por la API
      setTrabajos(response.data);
    } catch (error) {
      console.error(`Error fetching trabajos for tipoTrabajoId ${tipo_trabajo}:`, error);
      setTrabajos([]);
    }
  };

  return (
    <div className="px-40">
      {trabajos.map((trabajo, index) => (
        <div key={index} className="flex flex-row gap-10 bg-gradient-to-t from-transparent to-gray-400 py-10 rounded-3xl">
          <img
            src={trabajo.imagen_trabajo}
            alt="Imagen"
            className="w-1/3 h-64 ml-10 rounded-3xl"
          />
          <div className="pl-24 pt-8">
            <div className="py- text-center">
              <h1 className="font-extrabold text-6xl text-black">{trabajo.nombre_trabajo}</h1>
            </div>
            <div className="pt-14 text-center">
              {trabajo.tipo_trabajo && (
                <Link
                  to={`/trabajos/${trabajo.id}`}
                  className="text-2xl font-bold text-black hover:text-red-900"
                >
                  Mostrar trabajo
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
