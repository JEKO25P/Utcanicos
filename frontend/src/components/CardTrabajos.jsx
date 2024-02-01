import React from "react";

export default function CardTrabajos({ texto }, { direccion }) {
  return (
    <div className=" px-40 w">
      <div className=" bg-gradient-to-t from-transparent to-gray-400 py-20 rounded-3xl">
        <div className=" text-center">
          <div className="font-extrabold text-6xl text-black ">{texto}</div>
        </div>
        <div className="pt-14 text-center">
          <a
            href="/trabajosMecanic"
            className=" text-2xl font-bold  text-black hover:text-red-900"
          >
            Ver mas
          </a>
        </div>
      </div>
    </div>
  );
}
