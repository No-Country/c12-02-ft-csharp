import React from "react";

const ProductsCards = ({ result }) => {
  return <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-5 px-5">{result}</div>;
};

export default ProductsCards;
