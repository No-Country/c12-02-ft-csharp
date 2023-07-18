import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = products => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice &&
        (filters.category.length === 0 || filters.category.includes(product.category))  && (filters.brand.length === 0 || filters.brand.includes(product.brand))
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
