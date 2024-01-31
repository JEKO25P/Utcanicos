import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-700 fixed top-0 w-full h-24 gap-16 flex items-center justify-center ">
      <div className="text-white text-xl font-extrabold h-30 ml-20">
        <h1>Ut-canicos</h1>
      </div>
      <div className="text-5xl text-white font-extrabold ps-36 pe-96 pt-7">
        <ul>
          <li>Empezar</li>
        </ul>
      </div>
      <div className="flex flex-col items-center h-8 mr-32">
       <Link to={"/login"}>
       <box-icon name="user-circle" size="lg" color="#ffffff"></box-icon>
       </Link>
      </div>
    </div>
  );
}