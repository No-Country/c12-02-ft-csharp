import { Menu } from "./Menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import { useAuth } from "../context/authContext";

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
      <div className="sticky top-0 z-50">
        <nav className="flex justify-between items-center sm:pl-8 md:pl-1 h-20 bg-gray-200  relative ">
          <div>
            <Link to="/" className="text-xl pl-4 md:pl-2 font-bold text-gray-600 whitespace-nowrap">
              LaTech-Shop
            </Link>
          </div>
          <div className="relative hidden items-center md:block">
            <input
              type="text"
              name="search"
              id=""
              className="py-2 px-2 rounded-md w-96 focus:outline-none"
              placeholder="buscar"
            />
            <span className="text-gray-400 absolute md:right-3 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center flex-row-reverse">
            <div className="px-4 cursor-pointer lg:hidden" onClick={toogleOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>

            <div className=" ml-2 pr-8  ">
              <div className="flex items-center ">
                {/*  <Link to="/register" className="p-4 whitespace-nowrap text-sm hidden lg:block  text-gray-600  hover:underline ">
              Crea tu cuenta
            </Link> */}
                <a
                  href="#"
                  className="p-4 whitespace-nowrap text-sm  text-gray-600 hidden lg:block hover:underline"
                >
                  Mis compras
                </a>
                <div className=" flex justify-end">
                  {user ? (
                    <UserMenu />
                  ) : (
                    <Link
                      to="/login"
                      className="inline-flex items-center -mr-14 md:mr-2 gap-2 rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      href="/download"
                    >
                      <span className="text-sm font-medium"> Ingresar</span>

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
                <div>
                  <span className="bg-red-500 text-gray-200 rounded-full px-[3px] absolute right-6 bottom-10">
                    {totalCount}
                  </span>
                  <Link to="/car" className="p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-sm  text-gray-600 hidden lg:block  hover:underline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </Link>
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
