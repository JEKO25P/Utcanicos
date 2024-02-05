import React from "react";

export default function Costos({ horas, costoM, total }) {
  return (
    <div className="bg-white  text-black  ">
      <div className="py-10">
        <h1 className=" font-extrabold text-center justify-center">COSTOS</h1>
      </div>
      <div className=" flex flex-row justify-between px-32 items-center py-10">
        <div className=" font-semibold  ">
          <h1>Horas de trabajo</h1>
          {horas}
        </div>
        <div className=" font-semibold">
          <h1> Costo materiales</h1>
          {costoM}
        </div>
        <div className=" font-semibold">
          <h1>Total</h1>
          {total}
        </div>
      </div>
    </div>
  );
}
