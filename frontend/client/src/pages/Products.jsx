import CategoryFilter from "../components/CategoryFilter";
import { Card } from "../components/Card";
import ProductsCards from "../components/ProductsCards";
import { PriceFilter } from "../components/PriceFilter";
import useFirestoreData from "../hooks/useFirestoreData";
import { useFilters } from "../hooks/useFilters";
import BrandFilter from "../components/BrandFilter";

const Products = () => {
  const data = useFirestoreData("products");

  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(data);

  const result = filteredProducts.map((pro, index) => <Card key={index} product={pro} />);

  return (
    <div className="flex max-w-[1400px] mx-auto px-5 my-8">
      <div className="w-1/4 flex flex-col gap-4">
        <CategoryFilter />
        <PriceFilter />
        <BrandFilter />
      </div>
      <ProductsCards result={result} />
    </div>
  );
};

export default Products;
