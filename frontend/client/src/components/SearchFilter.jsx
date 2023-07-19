import { useFilters } from "../hooks/useFilters";

const SearchFilter = () => {
  const { setFilters } = useFilters();

  function handleInputChange(event) {
    setFilters(prevState => ({
      ...prevState,
      name: event.target.value
    }));
  }
  return (
    <div className="relative hidden items-center md:block">
      <input
        type="text"
        name="search"
        id=""
        className="py-2 px-2 rounded-md w-96 focus:outline-none"
        onChange={handleInputChange}
        placeholder="buscar"
      />
      <button className="text-gray-400 absolute md:right-3 top-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchFilter;
