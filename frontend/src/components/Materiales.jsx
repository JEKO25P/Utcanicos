import React from "react";

export default function Materiles({ texto, image, precio }) {
  return (
    <div className=" px-">
      <div className=" bg-white text-center justify-center px-10">
        <h1 className="text-black font-semibold ">Materiles Usados</h1>
      </div>
      <div className=" flex flex-row gap-10 bg-gradient-to-t from-transparent to-gray-400 py-10 rounded-3xl ">
        <img
          src={image}
          alt="Imagen"
          className="w-1/3 h-64 ml-10 rounded-3xl"
        />
        <div className="pt-8">
          <div className="text-center px-10">
            <h1 className=" font-medium text-lg text-black ">{texto}</h1>
          </div>
          <div className="pt-14 text-center">
            <h2
              href="/statusTrabajo"
              className=" text-2xl font-bold  text-black hover:text-red-900"
            >
              {precio}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
