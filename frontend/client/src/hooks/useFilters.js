import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  // filters.rating = filters.rating || [];

  const filterProducts = products => {
    return products.filter(product => {
      console.log(Math.round(product.rating));
      return (
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice &&
        (filters.category.length === 0 || filters.category.includes(product.category)) &&
        (filters.brand.length === 0 || filters.brand.includes(product.brand)) &&
        (filters.rating === null || filters.rating.includes(Math.round(product.rating)))
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
