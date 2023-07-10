import { RiStarFill } from "react-icons/ri";
export const Card = () => {
  return (
    <div className="m-4 lg:w-1/4 md:w-1/2 p-4 w-full  bg-gray-200 shadow-lg rounded-md">
      <div className="absolute">
        <RiStarFill className="relative text-yellow-400 w-14 h-14 -top-8 right-8" />
        <span className="relative bottom-[72px] text-[12px] -left-[12px] text-indigo-600">4.5</span>
      </div>
      <a className="block relative h-[220px] rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center mx-auto w-[90%] h-[90%] block rounded-md"
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6517/6517648_sd.jpg;maxHeight=640;maxWidth=550"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Computador</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Microsoft - Surface Pro 9 Touch Screen
        </h2>
        <div className="flex justify-between items-center mt-2">
          <p className="mt-1">$400.00</p>
          <div className="flex gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-full pt-[6px] pl-[6px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-gray-100 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div className="w-9 h-9 text-indigo-600 border border-indigo-800 rounded-full pt-[6px] pl-[6px]">
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
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
