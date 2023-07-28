import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdPlace } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="text-white">
        <div className="w-full bg-[#222222] h-auto">
          <div className="h-full max-w-7xl mx-auto">
            <div className="flex justify-evenly py-5 border-b-2 border-white">
              <div className="flex flex-col items-center">
                <div className="p-3 bg-orange-600 border-2 rounded-full">
                  <FaPhoneAlt />
                </div>
                <span>(+65) 66538060</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-orange-600 border-2 rounded-full">
                  <MdEmail />
                </div>
                <span>correo@gmail.com</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 bg-orange-600 border-2 rounded-full">
                  <MdPlace />
                </div>
                <span>Calle Primavera 123</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 px-5 py-12">
              <ul>
                <li className="font-bold">Sobre nosotros</li>
                <li>Nuestra historia</li>
                <li>Premios</li>
                <li>Nuestro equipo</li>
                <li>Carrera</li>
              </ul>
              <ul>
                <li className="font-bold">Compañia</li>
                <li>Nuestros servicios</li>
                <li>Clientes</li>
                <li>Donaciones</li>
                <li>Precios</li>
              </ul>
              <ul>
                <li className="font-bold">Recursos</li>
                <li>Blog</li>
                <li>Noticias</li>
                <li>Politica y privacidad</li>
              </ul>
              <div className="flex flex-col">
                <span className="font-bold">Suscribete</span>
                <input
                  type="text"
                  placeholder="Suscribete..."
                  className="px-2 py-1 my-2 rounded-lg"
                />
                <span>Únete para recibir las últimas novedades</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#272727] w-full h-28">
          <div className="max-w-sm mx-auto px-5 h-full flex flex-col justify-between text-center">
            <div className="w-full flex justify-between mt-5 px-5">
              <button className="p-3 border-2 rounded-full">
                <FaFacebookF />
              </button>
              <button className="p-3 border-2 rounded-full">
                <FaInstagram />
              </button>
              <button className="p-3 border-2 rounded-full">
                <FaTwitter />
              </button>
              <button className="p-3 border-2 rounded-full">
                <FaLinkedinIn />
              </button>
            </div>
            <p className="font-medium text-sm mb-2">
              © 2023 LaTech-Shop | Todos los derechos reservados
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
