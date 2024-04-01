function Works() {
  return (
    <>
      <div className="bg-black text-white p-8 xl:p-20">
        <div className="mb-8">
          <h1 className="text-[40px] font-bold">Trabajos</h1>
          <p className="text-xl">Cmaldfkjaflkasdmlasl</p>
        </div>
        {/* Works */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <img
              src=""
              alt=""
              className="w-full h-[600px] object-cover rounded-3xl"
            />
            <p className="text-gray-500">Fecha</p>
            <h3 className="text-2xl font-bold">Titulo</h3>
            <p className="text-gray-500">
              Description asdas das dasdassasdasdasds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <img src="" className="w-full h-56 object-cover rounded-3xl" />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Titulo</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img src="" className="w-full h-56 object-cover rounded-3xl" />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Titulo</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img src="" className="w-full h-56 object-cover rounded-3xl" />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Titulo</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img src="" className="w-full h-56 object-cover rounded-3xl" />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Titulo</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
