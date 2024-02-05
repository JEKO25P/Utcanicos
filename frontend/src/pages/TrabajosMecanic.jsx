import React from "react";
import NavbarTM from "../components/NavbarTM";
import CardTrabajos from "../components/CardTrabajos";
import CardxId from "../components/CardxId";

export default function TrabajosMecanic() {
  return (
    <div className=" flex flex-col bg-white py-10 w-screen ">
      <div>
        <NavbarTM />
      </div>
      <div className=" mt-44">
        <CardxId
          image={"src/assets/maserati-752606_1280.jpg"}
          texto={"Trabajo maserati"}
        />
      </div>
      <div className="mt-32">
        <CardxId
          image={"src/assets/bolcho.jpeg"}
          texto={"Trabajo Volkswagen"}
        />
      </div>
      <div className="mt-32">
        <CardxId image={"src/assets/ferrari.jpeg"} texto={"Trabajo Ferrari"} />
      </div>
    </div>
  );
}
