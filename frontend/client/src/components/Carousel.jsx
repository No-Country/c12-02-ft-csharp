import { useState, useEffect } from "react";
import imagen1 from "../assets/1.webp";
import imagen2 from "../assets/2.webp";
import imagen3 from "../assets/3.webp";
import imagen4 from "../assets/4.webp";

export const Carousel = () => {
  const slides = [imagen1, imagen2, imagen3, imagen4];
  const [imagenActual, setimagenActual] = useState(0);
  const cant = slides?.length;
  const intervalo = 3000;

  const next = () => {
    setTimeout(() => {
      setimagenActual(imagenActual === cant - 1 ? 0 : imagenActual + 1);
    }, 1000);
  };

  const prev = () => {
    setTimeout(() => {
      setimagenActual(imagenActual === 0 ? cant - 1 : imagenActual - 1);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, intervalo);

    return () => {
      clearInterval(timer);
    };
  }, [imagenActual]);

  if (!Array.isArray(slides) || cant === 0) return;

  return (
    <div className="w-full h-full flex justify-center items-center mt-8 px-2">
      <button
        onClick={prev}
        className="p-1 rounded-full bg-indigo-400/60 text-gray-200 hover:bg-white hover:text-indigo-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {slides.map((sli, index) => (
        <div className="max-w-full h-auto transition-transform ease-out duration-500" key={index}>
          {imagenActual === index && (
            <div className="w-[90%] h-full">
              <img src={sli} alt={`Imagen ${index}`} className="w-[1000px] mx-8" />
            </div>
          )}
        </div>
      ))}
      <button
        onClick={next}
        className="p-1 rounded-full bg-indigo-400/60 text-gray-200 hover:bg-white hover:text-indigo-600 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};
