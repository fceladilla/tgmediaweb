import React from "react";
import {
  RiMailFill,
  RiFilmLine,
  RiSmartphoneFill,
  RiComputerFill,
  RiMacFill,
  RiArticleFill,
} from "react-icons/ri";

function Services() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20">
        <div className="flex flex-col gap-4">
          <h1 className="text-[40px] font-bold">Nuestros servicios</h1>
          <p className="text-[20px] text-gray-500">asdasdasdasddasfsf</p>
          <form action="" className="w-full">
            <div className="relative">
              <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
              <input
                type="text"
                className="w-full bg-gray-300 py-4 pl-10 pr-36 rounded-xl outline-none "
                placeholder="Email your adress"
              />
              <button
                type="submit"
                className="absolute font-semibold py-2 px-6 bg-primary text-black rounded-xl top-1/2 -translate-y-1/2 right-2"
              >
                Suscribe
              </button>
            </div>
          </form>
        </div>
        {/* Servicios */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 ">
            <RiFilmLine className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">filmmaking + drone</h3>
            <p className="text-gray-500px">
              - Realizamos filmación y edición de videos para coberturas de
              eventos sociales y corporativos - Generamos nuestro propio
              contenido para redes ya sea que las administremos o no - Contamos
              con servicio de drone
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiSmartphoneFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">
              contenido, fotos y tiendas
            </h3>
            <p className="text-gray-500px">
              Creamos y desarrollamos material para redes sociales ofreciendo
              servicios de diseño de imagenes y fotografía - Administramos este
              contenido para distintas redes sociales, actividad mas conocida
              como community management y creamos tiendas virutales para
              distintos tipos de comercios
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiArticleFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">branding/identidad</h3>
            <p className="text-gray-500px">
              Trabajamos en el desarrollo de identidad de marca para que
              diferentes tipos de empresas y emprendedores puedan contar su
              historia
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiMacFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">consultoría y publicidad</h3>
            <p className="text-gray-500px">
              Brindamos talleres personalizados sobre el funcionamiento de las
              redes sociales para quienes quieren gestionarlas por sus propios
              medios. - Generamos campañas publicitarias en redes sociales
            </p>
          </div>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 ">
            <RiFilmLine className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">filmmaking + drone</h3>
            <p className="text-gray-500px">
              - Realizamos filmación y edición de videos para coberturas de
              eventos sociales y corporativos - Generamos nuestro propio
              contenido para redes ya sea que las administremos o no - Contamos
              con servicio de drone
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiSmartphoneFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">
              contenido, fotos y tiendas
            </h3>
            <p className="text-gray-500px">
              Creamos y desarrollamos material para redes sociales ofreciendo
              servicios de diseño de imagenes y fotografía - Administramos este
              contenido para distintas redes sociales, actividad mas conocida
              como community management y creamos tiendas virutales para
              distintos tipos de comercios
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiArticleFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">branding/identidad</h3>
            <p className="text-gray-500px">
              Trabajamos en el desarrollo de identidad de marca para que
              diferentes tipos de empresas y emprendedores puedan contar su
              historia
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <RiMacFill className="text-4xl p-2 bg-primary box-content rounded-xl" />
            <h3 className="text-[20px] font-bold">consultoría y publicidad</h3>
            <p className="text-gray-500px">
              Brindamos talleres personalizados sobre el funcionamiento de las
              redes sociales para quienes quieren gestionarlas por sus propios
              medios. - Generamos campañas publicitarias en redes sociales
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
