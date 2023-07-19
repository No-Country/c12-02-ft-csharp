import React from "react";

const ProductsCards = ({ result }) => {
  return (
    <div className="w-full h-[20%] justify-center flex flex-wrap gap-2">
      {result}
    </div>
  );
};

export default ProductsCards;
