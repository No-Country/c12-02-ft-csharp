

export const PriceFilter = ({ handleChangeMinPrice, handleChangeMaxPrice, selectedMinPrice, selectedMaxPrice }) => {

  return (
    <div className="bg-white rounded-lg p-4 border-2">
      <h2 className="font-bold">Filtrar por precio</h2>
      <div className="flex flex-col gap-2 px-5 mt-2 font-semibold">
        <input onInput={handleChangeMinPrice} type="range" min="0" max="1500" value={selectedMinPrice}/>

        <p>Precio mínimo: {selectedMinPrice}</p>
        <input onInput={handleChangeMaxPrice} type="range" min="0" max="1500"  value={selectedMaxPrice}/>
        <p>Precio máximo: {selectedMaxPrice}</p>
      </div>
    </div>
  );
};
