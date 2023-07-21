import CategoryFilter from "../components/CategoryFilter";
import { Card } from "../components/Card";
import ProductsCards from "../components/ProductsCards";
import { PriceFilter } from "../components/PriceFilter";
import useFirestoreData from "../hooks/useFirestoreData";
import { useFilters } from "../hooks/useFilters";
import BrandFilter from "../components/BrandFilter";
import RatingFilter from "../components/RatingFilter";
import { useEffect, useState } from "react";

import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";

const Products = () => {
  const data = useFirestoreData("products");

  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(data);

  const result = filteredProducts.map((pro, index) => <Card key={index} product={pro} />);

  const [openMenu, setOpenMenu] = useState(false);

  const [isComponentVisible, setIsComponentVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        // Cambia el tamaño mínimo de la pantalla según tus necesidades
        setIsComponentVisible(false);
      } else {
        setIsComponentVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {isComponentVisible ? (
        <div className="flex max-w-[1400px] mx-auto px-5 my-8">
          <div className="w-1/4 flex flex-col gap-4">
            <CategoryFilter />
            <PriceFilter />
            <RatingFilter filteredData={filteredProducts} />
            <BrandFilter />
          </div>
          <ProductsCards result={result} />
        </div>
      ) : (
        <>
          <div className="fixed bg-white z-50 flex shadow-lg">
            <div
              className={`flex flex-col gap-2 ml-2 mt-2 transition-all duration-300 ${
                openMenu ? "w-44" : "w-0"
              }`}
            >
              <div className={`${openMenu ? "" : "hidden"}`}>
                <CategoryFilter />
                <PriceFilter />
                <RatingFilter />
                <BrandFilter />
              </div>
            </div>
            <div className="m-2" onClick={handleChange}>
              {openMenu ? (
                <RiMenuFoldFill className="text-xl" />
              ) : (
                <RiMenuUnfoldFill className="text-xl" />
              )}
            </div>
          </div>
          <div className="flex max-w-[1400px] mx-auto px-5 my-8">
            <ProductsCards result={result} />
          </div>
        </>
      )}
    </>
  );
};

export default Products;
