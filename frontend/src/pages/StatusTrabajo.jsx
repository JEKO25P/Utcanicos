import React from "react";
import NavbarStatus from "../components/NavbarStatus";
import CardDescrip from "../components/CardDescrip";
import RelojContador from "../components/RelojContador";
import CardMU from "../components/CardMU";
import Materiles from "../components/Materiales";
import Costos from "../components/Costos";
import BotonFinal from "../components/BotonFinal";

export default function () {
  return (
    <div className="bg-white h w-screen">
      <div>
        <NavbarStatus id_trabajo={"(JEKO25P08)"} />
      </div>
      <div className="mt-28 ">
        <CardDescrip image={"src/assets/ferrari.jpeg"} />
      </div>
      <div className="mt-10">
        <RelojContador
        tiempo={'1 4 : 4 5'} />
        {/*AQUI CLARAMENTE DEBE DE IR LA API DE EL RELOJ Y DE ECHO TAMBIEN DESDE LA CARD DE RELOJCONTADOR ATTE: JOSIAS*/}
      </div>
      <div className="flex flex-row mt-32 px-20 gap-5">
        <div className="">
          <Materiles
        texto={"Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos"}
        image={'src/assets/llantas.jpeg'}
        precio={'$10000'}
        />
        </div>
        <div className="px-32">
          <CardMU
        total={'$10000'}/>
        </div>
      </div>
      <div className="mt-28">
        <Costos
        horas={'$ 1,750.00'}
        costoM={'$ 10000.00'}
        total={'$ 11,750.00'}
        />
      </div>
      <div className="mt-32">
        <BotonFinal/>
      </div>
    </div>
  );
}
