import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function CardTiposTrabajos() {
  const [tiposTrabajos, setTiposTrabajos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTiposTrabajos();
  }, []);

  const fetchTiposTrabajos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tipos_trabajos");
      setTiposTrabajos(response.data);
    } catch (error) {
      console.error("Error fetching tipos de trabajos:", error);
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
              onClick={() => navigate(`/trabajos/${tipoTrabajo.id}`)}
              className="pt-14 text-center text-2xl font-bold text-black hover:text-red-900"
            >
              Mostrar trabajos
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}
