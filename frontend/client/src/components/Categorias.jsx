import cel from "../assets/cel.png"
import torre from "../assets/torre.png"
import tv from "../assets/tv.png"
import conso from "../assets/CONS.jpg"
export const Categorias = () => {
  return (
    <>
      <div className="flex flex-col items-center my-10">
        <div className="text-3xl font-bold mb-8">
          Compra por Categoria <span className="text-5xl">💻</span>
        </div>
        <div className="flex items-center justify-between  w-[70%]">
          <div className="flex flex-col  items-center w-60">
            <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-40 h-40 shadow-lg">
              <img
                src={cel}
                className=" w-24 h-24 mx-auto"
                alt=""
              />
            </div>
            <p className="my-4 text-xl">Celulares</p>
          </div>
          <div className="flex flex-col  items-center w-60">
            <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-40 h-40 shadow-lg">
              <img
                src={torre}
                className=" w-24 h-24 mx-auto"
                alt=""
              />
            </div>
            <p className="my-4 text-xl">Computadores</p>
          </div>
          <div className="flex flex-col  items-center w-60">
            <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-40 h-40 shadow-lg">
              <img
                src={tv}
                className=" w-28 h-24 mx-auto"
                alt=""
              />
            </div>
            <p className="my-4 text-xl">Televisores</p>
          </div>
          <div className="flex flex-col  items-center w-60">
            <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-40 h-40 shadow-lg">
              <img
                src={conso}
                className=" w-24 h-24 mx-auto"
                alt=""
              />
            </div>
            <p className="my-4 text-xl">Consolas y Videojuegos</p>
          </div>
        </div>
      </div>
    </>
  );
};
