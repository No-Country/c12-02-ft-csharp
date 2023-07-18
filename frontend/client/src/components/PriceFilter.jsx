import { useFilters } from "../hooks/useFilters";

export const PriceFilter = () => {
  const { filters, setFilters } = useFilters();

  const handleChangeMinPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }));
  };

  const handleChangeMaxPrice = event => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }));
  };

  return (
    <div className="bg-white rounded-lg p-4 border-2">
      <h2 className="font-bold">Filtrar por precio</h2>
      <div className="flex flex-col gap-2 px-5 mt-2 font-semibold">
        <input
          onInput={handleChangeMinPrice}
          type="range"
          min="0"
          max="1500"
          value={filters.minPrice}
        />

        <p>Precio mínimo: ${filters.minPrice}</p>
        <input
          onInput={handleChangeMaxPrice}
          type="range"
          min="0"
          max="1500"
          value={filters.maxPrice}
        />
        <p>Precio máximo: ${filters.maxPrice}</p>
      </div>
    </div>
  );
};
