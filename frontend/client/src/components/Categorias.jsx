import cel from "../assets/cel.png";
import torre from "../assets/torre.png";
import tv from "../assets/tv.png";
import conso from "../assets/CONS.jpg";
export const Categorias = () => {
  return (
    <>
      <div className="flex flex-col items-center my-10">
        <div className="text-3xl font-bold mb-8">
          Compra por Categoria <span className="text-5xl">💻</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4  md:w-[98%] lg:w-[80%]">
          <div className="flex flex-col  items-center">
            <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-56 h-56 md:w-40 md:h-40 shadow-lg">
              <img src={cel} className=" w-40 h-40 md:w-24 md:h-24 mx-auto" alt="celulares" />
            </div>
            <p className="my-4 text-lg hidden md:block">Celulares</p>
          </div>
          <div className="flex flex-col  items-center max-w-lg">
          <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-56 h-56 md:w-40 md:h-40 shadow-lg">
              <img src={torre} className=" w-40 h-40 md:w-24 md:h-24 mx-auto" alt="computadores" />
            </div>
            <p className="my-4 text-lg hidden md:block">Computadores</p>
          </div>
          <div className="flex flex-col  items-center max-w-lg">
          <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-56 h-56 md:w-40 md:h-40 shadow-lg">
              <img src={tv} className=" w-40 h-40 md:w-24 md:h-24 mx-auto" alt="televisores" />
            </div>
            <p className="my-4 text-lg hidden md:block">Televisores</p>
          </div>
          <div className="flex flex-col  items-center max-w-lg">
          <div className="flex items-center bg-white border-4 border-indigo-600 rounded-full w-56 h-56 md:w-40 md:h-40 shadow-lg">
              <img src={conso} className=" w-40 h-40 md:w-24 md:h-24 mx-auto rounded-xl" alt="consolas y videojuegos" />
            </div>
            <p className="my-4 text-lg hidden md:block ">Consolas y Videojuegos</p>
          </div>
        </div>
      </div>
    </>
  );
};
