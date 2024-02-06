import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className=" bg-red-900 fixed top-0 w-full h-32 gap-16 flex items-center justify-center ">
      <div className="text-white text-xl font-extrabold  ml-20">
        <h1>Ut-canicos</h1>
      </div>
      <div className="text-3xl text-white font-extrabold ps-36 pe-96 pt-7">
        <Link to="/tipos_trabajos" className="text-white hover:text-black">
          Empezar
        </Link>
      </div>
      <div className="flex flex-col items-center mr-32">
        <box-icon name="user-circle" size="lg" color="#ffffff"></box-icon>
        <Link
          to="/login"
          className="text-white hover:text-black font-extrabold text-xs"
        >
          Perfil
        </Link>
      </div>
    </div>
  );
}
