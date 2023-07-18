import { useFilters } from "../hooks/useFilters";
import useFirestoreData from "../hooks/useFirestoreData";

const BrandFilter = () => {
  const data = useFirestoreData("products");

  const { setFilters } = useFilters();

  const handleChange = event => {
    setFilters(prevState => ({
      ...prevState,
      brand: event.target.checked
        ? [...prevState.brand, event.target.value]
        : prevState.brand.filter(brand => brand !== event.target.value)
    }));
  };

  const brands = [...new Set(data.map(product => product.brand))];

  return (
    <div className="bg-white rounded-lg p-4 border-2">
      <h2 className="font-bold">Marcas</h2>
      <div className="flex flex-col gap-2 px-5 mt-2 font-semibold">
        {brands.map(brand => (
          <label key={brand} className="flex gap-2">
            <input type="checkbox" value={brand} onChange={handleChange} />
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
