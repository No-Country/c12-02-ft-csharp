import { useFilters } from "../hooks/useFilters";
import useFirestoreData from "../hooks/useFirestoreData";

const CategoryFilter = () => {
  const data = useFirestoreData("products");

  const { setFilters } = useFilters();

  const handleChange = event => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.checked
        ? [...prevState.category, event.target.value]
        : prevState.category.filter(category => category !== event.target.value)
    }));
  };

  const categories = [...new Set(data.map(product => product.category))];

  return (
    <div className="bg-white rounded-lg p-4 border-2">
      <h2 className="font-bold">Categorias</h2>
      <div className="flex flex-col gap-2 px-5 mt-2 font-semibold">
        {categories.map(category => (
          <label key={category} className="flex gap-2">
            <input type="checkbox" value={category} onChange={handleChange} />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
