import React from "react";

export default function RelojContador({tiempo}) {
  return (
    <div className="bg-white flex flex-col py-16">
      <div className="py-10 text-center justify-center">
        <h1 className="text-black font-semibold">
          Horas a realizar el trabajo
        </h1>
      </div>
      <div className="flex flex-row gap-96 justify-center">
        <div className="">
          <h1 className="text-black font-mono text-6xl bg-gradient-to-t from-transparent to-gray-400 rounded-3xl py-10 px-10">
            {tiempo}
          </h1>
        </div>
        <div className="flex flex-row gap-16 pt-10 ">
          <h1 className="text-black bg-gradient-to-t from-transparent to-red-900  rounded-2xl px-10 pt-4">
            Iniciar
          </h1>
          <h1 className="text-black bg-gradient-to-t from-transparent to-gray-400  rounded-2xl px-10 pt-4">
            Aumentar
          </h1>
        </div>
      </div>
    </div>
  );
}
