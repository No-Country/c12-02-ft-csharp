import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
// import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const DescriptionAside = ({ name, category, rating, price, brand, description }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 > 0;
  return (
    <div className="flex flex-col p-2">
      <div className="my-2 p-1">
        <h2 className="font-bold text-2xl">{name}</h2>
      </div>
      <div className="flex justify-between p-1 text-gray-500 text-sm border-b-2 pb-5">
        <p className="text-md font-medium">
          Categoría: <span className="text-black">{category}</span>
        </p>
        <div className="flex gap-2">
          {Array(5)
            .fill()
            .map((_, i) => {
              if (i < fullStars) {
                return <BsStarFill key={i} className="h-5 text-yellow-500" />;
              }
              if (hasHalfStar && i === fullStars) {
                return <BsStarHalf key={i} className="h-5 text-yellow-500" />;
              }
              return <BsStar key={i} className="h-5 text-yellow-500" />;
            })}
          <p>(5 reviews)</p>
        </div>
      </div>
      <div className="my-2 p-1">
        <p className="text-md font-medium text-gray-500">
          Marca: <span className="text-black">{brand}</span>
        </p>
      </div>
      <div className="my-2 p-1">
        <p className="text-md font-medium text-gray-500">
          Precio: <span className="text-black">${price}</span>
        </p>
      </div>
      <div className="my-2 p-1">
        <p className="text-md font-medium text-gray-500">Descripción:</p>
        <ul>
          {description?.map(descrip => {
            return (
              <li
                key={description.indexOf(descrip)}
                className="list-disc py-1 text-gray-500 text-sm break-words"
              >
                {descrip}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DescriptionAside;
