import React from "react";

export default function CardxId({ texto, image }) {
  return (
    <div className=" px-40">
      <div className=" flex flex-row gap-10 bg-gradient-to-t from-transparent to-gray-400 py-10 rounded-3xl ">
        <img
          src={image}
          alt="Imagen"
          className="w-1/3 h-64 ml-10 rounded-3xl"
        />
        <div className="pl-24 pt-8">
          <div className=" py- text-center ">
            <h1 className="font-extrabold text-6xl text-black ">{texto}</h1>
          </div>
          <div className="pt-14 text-center">
            <a
              href="/statusTrabajo"
              className=" text-2xl font-bold  text-black hover:text-red-900"
            >
              Mostrar trabajo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
