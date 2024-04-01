// import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <section className="bg-secondary min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 ">
      {/*Information */}
      <div className="bg-black md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl text-secondary font-bold leading-[6.5rem]">
            Time is{" "}
            <span className="text-primary py-2 px-6 border-4 border-primary relative inline-block">
              GOD
            </span>{" "}
          </h1>
          <p className="text-white text-2xl leading-[3rem] mt-[15px]">
            Soy Tomy Gaudio, me dedico a crear, desarrollar y rediseñar la
            identidad de marcas para lanzarlas al mercado y las acciones
            necesarias para mantenerlas actualizadas en el tiempo. Creo
            contenido para redes sociales, brindo servicios de fotografía,
            filmmaking y consultoría.
          </p>
          <div className="flex flex-col md:flex-row item-center gap-4 mt-[10px] ml-[20px] mt-[40px] h-[55px]">
            <button className="bg-primary py-2 px-8 rounded-xl text-xl ">
              Contacto
            </button>
            {/* <button className="flex items-center gap-4 text-white py-2 px-8 rounded-xl text-xl">
              <FaPlay className="bg-white text-primary p-4  rounded-full box-content  " />{" "}
              Watch our content
            </button> */}
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className="bg-black md:col-span-3 flex items-center justify-center relative p-8">
        <img src="tomy.png" alt="" className="w-96 h-86" />
      </div>
    </section>
  );
}
export default Hero;
