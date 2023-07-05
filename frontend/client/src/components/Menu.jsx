import PropTypes from "prop-types";
export const Menu = ({ openClose }) => {
  return (
    <>
      <div className="relative  items-center md:hidden  bg-gray-300">
        <input
          type="text"
          name="search"
          id=""
          className="py-2 px-2 rounded-md w-[95%] focus:outline-none  mt-4 mb-2"
          placeholder="buscar"
        />
        <span className="text-gray-400 absolute right-6 top-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>
      </div>
      <div
        className="flex flex-col text-center bg-gray-300 text-black shadow-lg"
        onClick={openClose}>
        <a
          href=""
          className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center mx-4 pl-2  rounded-md">
          Mis compras
        </a>
        <a
          href=""
          className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center mx-4 pl-2 mb-4 rounded-md">
          Mi carrito
        </a>
        <div className="border-b"></div>
        <div className="flex flex-col  gap-2 my-4">
          <ul>
            <p className=" h-8 flex items-center mx-4 pl-2 rounded-md">Categorias</p>
            <li>
              <a
                href=""
                className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center ml-8 mr-4 pl-2 rounded-md">
                Celulares
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center ml-8 mr-4 pl-2 rounded-md">
                Computadores
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center ml-8 mr-4 pl-2 rounded-md">
                Televisores
              </a>
            </li>
            <li>
              <a
                href=""
                className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center ml-8 mr-4 pl-2 rounded-md">
                Consolas y VideoJuegos
              </a>
            </li>
          </ul>

          <a
            href="#"
            className="hover:bg-gray-500 hover:text-gray-200 h-8 flex items-center mx-4 hover:underline pl-2 rounded-md">
            Ofertas
          </a>
        </div>
      </div>
    </>
  );
};

Menu.propTypes = {
  openClose: PropTypes.bool.isRequired
};
