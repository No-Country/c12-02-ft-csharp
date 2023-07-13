import PropTypes from "prop-types";
import { Card } from "./Card";

export const ComponentHome = ({ title, icon, reverse, products }) => {
  return (
    <>
      <div
        className={`flex mt-4 items-center bg-gray-400 shadow-2xl ${
          reverse && "flex-row-reverse"
        }`}>
        <div className="flex flex-col w-[30%] items-center p-2">
          <p className="text-4xl font-bold">
            {title} <span className="text-4xl">{icon}</span>
          </p>
          <button className="bg-orange-600 text-white w-[40%] p-2 rounded-lg mt-4 text-xl">
            Ver más
          </button>
        </div>
        <div className="flex items-center justify-between w-[80%] p-2">
          <div className="flex transition-transform ease-out duration-500">
            {products && products.map((pro, index) => <Card key={index} product={pro} />)}
          </div>
        </div>
      </div>
    </>
  );
};

ComponentHome.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired
};
