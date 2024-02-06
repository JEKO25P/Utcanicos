import React from "react";
import NavbarTM from "../components/NavbarTM";
import CardTrabajos from "../components/CardTrabajos";
import { useParams } from "react-router-dom";

export default function Trabajos() {
  const { tipo_trabajo_id } = useParams(); // Obtener el ID del tipo de trabajo de la URL

  return (
    <div className="flex flex-col bg-white py-10 w-screen">
      <div>
        <NavbarTM />
      </div>
      <div className="mt-44">
        <CardTrabajos tipo_trabajo={tipo_trabajo_id} /> {/* Pasar el ID del tipo de trabajo como prop */}
      </div>
    </div>
  );
}
