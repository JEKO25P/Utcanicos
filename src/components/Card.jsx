import React from "react";

const Card = (image) => {
  return (
    <div className="min-h-screen">
      <div className=" bg-white py-10">
        <div className="py-10 text-center">
          <div className="font-extrabold text-4xl text-black">
            BIENVENIDO A UT-CANICOS <br />
            Juan Ross
          </div>
        </div>
        <div className=" flex items-center justify-center  ">
          <img
            className="h-96 rounded-2xl"
            src="src/assets/istockphoto-1478431022-1024x1024.jpg"
            alt="Imagen de empresa"
          />
        </div>
        <div className="px-6 pt-10 text-center">
          <h2 className="font- text-base text-black pb-10">
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
