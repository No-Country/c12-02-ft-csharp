import { Link } from "react-router-dom";
function LoginTitle({ title, question, linkTo, linkText }) {
  return (
    <div>
      <div className="mt-3 text-left sm:mt-2">
        <h2 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-xl mb-2">
          Tienda Online
        </h2>
        <div className="inline-flex items-center w-full">
          <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-3xl">{title}</h3>
        </div>
        <div className="flex items-center my-4">
          <h3 className="text-gray-600 text-sm mr-2">{question}</h3>
          <Link
            to={linkTo}
            type="button"
            className=" md:text-sm font-medium text-gray-600 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm underline">
            {" "}
            {linkText}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginTitle;
