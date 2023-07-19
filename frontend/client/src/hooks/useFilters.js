import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = products => {
    return products.filter(product => {
      return (
        (filters.name.length === 0 ||
          (product.name && product.name.toLowerCase().includes(filters.name.toLowerCase()))) &&
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
