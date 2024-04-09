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
              src="pizza.png"
              alt=""
              className="w-full h-[600px] object-cover rounded-3xl"
            />
            <p className="text-gray-500">Fecha</p>
            <h3 className="text-2xl font-bold">The Pizza</h3>
            <p className="text-gray-500">
              Description asdas das dasdassasdasdasds
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <img
                src="Figa.png"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Figa</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="bcnfc.png"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Barcelona Powerchair FC</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="paris.png"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Paris Connection</h3>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src="mcfly.png"
                className="w-full h-56 object-cover rounded-3xl"
              />
              <p className="text-gray-500">Fecha</p>
              <h3 className="text-2xl font-bold">Mc Fly</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
