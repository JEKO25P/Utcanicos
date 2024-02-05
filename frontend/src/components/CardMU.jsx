import React from "react";
import Materiles from "./Materiales";

export default function CardMU({ total }) {
  return (
    <div className=" bg-white flex flex-col gap-20 text-center justify-center px-8 py-8">
      <div>
        <h1 className="text-black font-semibold px-10">
          Precio de materiales <br /> Usados
        </h1>
      </div>
      <div className="">
        <h1 className="text-black font-mono text-6xl bg-gradient-to-t from-transparent to-gray-400 rounded-3xl py-6 px-10">
          {total}
        </h1>
      </div>
      <div>
        <h2 className="text-black bg-gradient-to-t from-transparent to-red-900  py-5 rounded-2xl text-4xl">
          Agregar material
        </h2>
      </div>
    </div>
  );
}
