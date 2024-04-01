import React from "react";

function Clients() {
  return (
    <>
      <div className="bg-primary p-8 flex flex-col items-center justify-center gap-8">
        <h1 className="text-2xl font-medium text-center">
          Algunos de nuestros clientes
        </h1>
        <div className="flex flex-col md:flex-row items-center flex-wrap md:gap-20 ">
          <img src="celaya.png" className="w-40" />
          <img src="celaya.png" className="w-40" />
          <img src="celaya.png" className="w-40" />
          <img src="celaya.png" className="w-40" />
          <img src="celaya.png" className="w-40" />
        </div>
      </div>
    </>
  );
}

export default Clients;
