import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CardTiposTrabajos({tipo_trabajo}) {
  const [tiposTrabajos, setTiposTrabajos] = useState([]);
  const [trabajos, setTrabajos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTiposTrabajos();
  }, []);

  useEffect(() => {
    console.log("Tipo de trabajo ID:", tipo_trabajo);
    if (tipo_trabajo) {
      fetchTrabajosPorTipo();
    }
  }, [tipo_trabajo]);

  const fetchTiposTrabajos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tipos_trabajos");
      setTiposTrabajos(response.data);
    } catch (error) {
      console.error("Error fetching tipos de trabajos:", error);
    }
  };

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
    <div>
      {tiposTrabajos.map((tipoTrabajo, index) => (
        <div key={index} className="px-40 w">
          <div className="bg-gradient-to-t from-transparent to-gray-400 py-20 rounded-3xl">
            <div className="text-center">
              <div className="font-extrabold text-6xl text-black">
                {tipoTrabajo.nombre_tipo_trabajo}
              </div>
            </div>
            <button
              onClick={() => navigate(`/trabajos/${tipoTrabajo.id}`)} // Aquí navegamos a la ruta correspondiente usando el ID del tipo de trabajo
              className="flex justify-center pt-14 text-center text-2xl font-bold text-black hover:text-red-900"
            >
              Mostrar trabajos
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
