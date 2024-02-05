import React from "react";
import NavbarT from "../components/NavbarT";
import Card from "../components/Card";
import CardTrabajos from "../components/CardTrabajos";
import Navbar from "../components/Navbar";

export default function Trabajos() {
  return (
    <div className=" flex flex-col bg-white py-10 w-screen ">
      <div>
        <NavbarT />
      </div>
      <div className="mt-44">
        <CardTrabajos texto={"Reparacion mecanica"} direccion={"ver mas"} />
      </div>
      <div className="mt-40">
        <CardTrabajos texto={"Reparación de chapa y pintura"} />
      </div>
      <div className="mt-40">
        <CardTrabajos texto={"Revisión"} />
      </div>
    </div>
  );
}
