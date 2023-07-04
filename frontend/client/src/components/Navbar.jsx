import { Link } from "react-router-dom";
import { RiSearch2Line, RiMore2Fill, RiShoppingCartLine } from "react-icons/ri";
export const NavBar = () => {
  return (
    <>
      <nav className="bg-gray-300 border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              LaTech-Shop
            </span>
          </Link>
          <div className="relative flex items-center">
            <input
              type="text"
              name="search"
              id=""
              className="py-2 px-2 rounded-md w-96 focus:outline-none"
              placeholder="buscar"
            />
            <span className="text-gray-400 absolute right-6">
              <RiMore2Fill />
            </span>
            <span className="text-gray-400 absolute right-2">
              <RiSearch2Line />
            </span>
          </div>
          <div className="flex items-center justify-between w-96 px-2">
            <Link to="/register" className="mr-6 text-sm  text-gray-600 hover:underline">
              Crea tu cuenta
            </Link>
            <Link to="/login" className="text-sm  text-gray-600  hover:underline">
              Ingresa
            </Link>
            <a href="#" className="text-sm  text-gray-600  hover:underline">
              Mis compras
            </a>
            <a className="text-xl text-gray-600">
              <RiShoppingCartLine />
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mx-auto space-x-8 text-sm py-2 items-center w-[51%] justify-between ">
              <li>
                <a href="#" className="text-gray-900  hover:underline w-32" aria-current="page">
                  Celulares
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Computadores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Televisores
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900  hover:underline">
                  Consolas y VideoJuegos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 font-bold text-lg ml-10 hover:underline">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
