import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { useFilters } from "../hooks/useFilters";
import useFirestoreData from "../hooks/useFirestoreData";
import { BsStarFill, BsStar } from "react-icons/bs";

const RatingFilter = () => {
  const { setFilters } = useContext(FiltersContext);
  const { filterProducts } = useFilters();
  const data = useFirestoreData("products");
  const filteredData = filterProducts(data);

  const rating = filteredData.map((product) => product.rating);

  const ocurrencias = rating.reduce((contador, numero) => {
    const numeroEntero = Math.round(numero);
    contador[numeroEntero] = (contador[numeroEntero] || 0) + 1;
    return contador;
  }, {});

  const numerosAgrupados = Object.entries(ocurrencias).map(([numero, cantidad]) => ({
    numero: parseInt(numero),
    cantidad,
  }));

  const handleClick = (event) => {
    const selectedRating = event.currentTarget.getAttribute("data-value");
    setFilters((prevState) => ({
      ...prevState,
      rating: prevState.rating === selectedRating ? null : selectedRating,
    }));
  };

  return (
    <div className="bg-white rounded-lg p-4 border-2">
      <h2 className="font-bold">Calificación</h2>
      <div className="flex flex-col gap-2 px-5 mt-2 font-semibold">
        {numerosAgrupados.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            data-value={item.numero}
            onClick={handleClick}
          >
            <div className="flex gap-1">
              {Array(5)
                .fill()
                .map((_, i) => {
                  if (i < item.numero) {
                    return <BsStarFill key={i} className="h-5 text-yellow-500" />;
                  }
                  return <BsStar key={i} className="h-5 text-yellow-500" />;
                })}
              <p>({item.cantidad})</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingFilter;
