import React, { useState } from "react";

//Icons
import { RiAlignRight } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
      <div className=" xl:w-1/6 text-center -mt-4">
        <a href="" className="font-bold relative p-1 ">
          <span className="text-2xl">tg</span>
          <span className="text-primary text-3xl">|</span>
          <span className="text-">media</span>
        </a>
      </div>
      <nav
        className={`fixed bg-white w-[80%] md-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="">Home</a>
        <a href="">Nosotros</a>
        <a href="">Servicios</a>
        <a href="">Productos</a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2 "
      >
        {showMenu ? <IoMdCloseCircle /> : <RiAlignRight />}
      </button>
    </header>
  );
}

export default Header;
