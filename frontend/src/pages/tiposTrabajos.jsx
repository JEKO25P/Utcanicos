import React from "react";
import NavbarT from "../components/NavbarT";
import CardTiposTrabajos from "../components/CardTiposTrabajos";;

export default function TiposTrabajos() {
  return (
    <div className="flex flex-col bg-white py-10 w-screen">
      <NavbarT />
      <div className="mt-44">
        <CardTiposTrabajos  direccion={"ver mas"} />
      </div>
    </div>
  );
}
