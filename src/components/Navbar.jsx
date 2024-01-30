import React from "react";
export default function Navbar() {
  return (
    <div className="bg-red-700 fixed top-0 w-full h-24 gap-16 flex items-center justify-center ">
      <div className="text-white text-xl font-extrabold  ml-20">
        <h1>Ut-canicos</h1>
      </div>
      <div className="text-3xl text-white font-extrabold ps-36 pe-96 pt-7">
        <ul>
          <li className="hover:text-black">Empezar</li>
        </ul>
      </div>
      <div className="flex flex-col items-center mr-32">
        <box-icon name="user-circle" size="lg" color="#ffffff"></box-icon>
        <a
          href="/"
          className="text-white hover:text-black font-extrabold text-xs"
        >
          Perfil
        </a>
      </div>
    </div>
  );
}
