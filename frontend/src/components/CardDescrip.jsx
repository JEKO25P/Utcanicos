import React from "react";

const CardDescrip = ({ image }) => {
  return (
    <div className="">
      
        <div className="py-16 text-center">
          <div className="font-extrabold text-6xl text-black ">
            Descripción
          </div>
        </div>
        <div className="flex flex-row px-24">
          <img
            className="h-96 rounded-2xl"
            src={image}
            alt="Imagen de empresa"
          />
          <h2 className="font-bold  text-black px-10 text-2xl">
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
          </h2>
        </div>
      
    </div>
  );
};

export default CardDescrip;
