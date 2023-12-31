import { Menu } from "./Menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import { useAuth } from "../context/authContext";
import SearchFilter from "./SearchFilter";

export const Navbar = () => {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const { totalCount } = useSelector(state => state.carts);
  const toogleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let timeoutId;
    const ocultarMenu = () => {
      if (window.innerWidth > 1024 && isOpen) setIsOpen(false);
    };
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(ocultarMenu, 10); // Ajusta el tiempo de espera según tus necesidades
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 z-50 w-[100%]">
        <nav className="flex justify-between items-center sm:pl-8 md:pl-1 h-20 bg-gray-200 relative ">
          <div>
            <Link to="/" className="text-xl pl-4 md:pl-2 font-bold text-gray-600 whitespace-nowrap">
              LaTech-Shop
            </Link>
          </div>
          <SearchFilter />
          <div className="flex items-center flex-row-reverse">
            <div className="cursor-pointer lg:hidden" onClick={toogleOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>

            <div className=" ml-2 pr-4 md:pr-8  ">
              <div className="flex items-center justify-evenly md:w-[200px] lg:w-full">
                <a
                  href="#"
                  className="p-4 whitespace-nowrap text-sm  text-gray-600 hidden lg:block hover:underline"
                >
                  Mis compras
                </a>
                <div className="flex justify-end">
                  {user ? (
                    <UserMenu />
                  ) : (
                    <Link
                      to="/login"
                      className="inline-flex items-center md:mr-2 gap-2 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      href="/download"
                    >
                      <span className="text-sm font-medium">Ingresar</span>

                      <svg
                        className="h-5 w-5 rtl:rotate-180 "
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className="flex justify-end">
                  <Link to="/car" className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-sm  text-gray-600  hover:underline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Link>
                  <span
                    className={`absolute bottom-10 bg-red-500 text-gray-200 rounded-full w-6 h-6 flex items-center justify-center `}
                  >
                    {totalCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <nav className="bg-gray-100 shadow-xl">
          <div className="max-w-screen-xl px-0 py-3  hidden sm:hidden lg:block">
            <div className="flex items-center">
              <ul className="flex  font-medium mx-auto gap-6 text-sm py-2 items-center w-[55%] justify-between">
                <li>
                  <Link to="/products" className="text-gray-900  hover:underline w-32">
                    Todo
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-900  hover:underline w-32">
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
                  <a href="#" className="text-gray-900  hover:underline whitespace-nowrap">
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
        {isOpen ? <Menu openClose={toogleOpen} /> : null}
      </div>
    </>
  );
};
