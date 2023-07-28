import PropTypes from "prop-types";
import { Card } from "./Card";
import "./loading.css";
export const ComponentHome = ({ title, icon, reverse, products, loading }) => {
  return (
    <>
      <div
        className={`flex flex-col lg:flex-row mt-4 items-center bg-gray-400 shadow-2xl  ${
          reverse && "flex-row-reverse"
        }`}
      >
        <div className="flex flex-col w-full lg:w-[20%] items-center p-2 ml-6 md:ml-0">
          <p className="text-3xl lg:text-xl font-bold">
            {title} <span className="text-3xl lg:text-xl">{icon}</span>
          </p>
          <button className="bg-orange-600 text-white w-[50%] lg:w-full p-2 rounded-lg mt-4 text-xl">
            Ver más
          </button>
        </div>
        <div className="w-full lg:w-[80%] p-2 flex justify-center">
          {loading ? (
            <div className="sk-chase m-32">
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
              <div className="sk-chase-dot"></div>
            </div>
          ) : (
            <div className="flex flex-col  md:flex-row md:justify-between max-w-xs md:max-w-5xl transition-transform ease-out duration-500">
              {products && products.map((pro, index) => <Card key={index} product={pro} />)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ComponentHome.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
