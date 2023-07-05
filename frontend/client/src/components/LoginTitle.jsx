import {Link} from "react-router-dom"
function LoginTitle() {
  return (
    <div>
      <div className="mt-3 text-left sm:mt-2">
        <h2 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-xl mb-2">
          Tienda Online
        </h2>
        <div className="inline-flex items-center w-full">
          <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-3xl">
            Iniciar sesión
          </h3>
        </div>
        <div className="flex items-center my-4">
          <h3 className="text-gray-600 text-sm mr-2">¿No tienes una cuenta? </h3>
          <Link
            to="/register"
            type="button"
            className=" md:text-sm font-medium text-gray-600 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm underline">
            {" "}
            Registrate{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginTitle;
