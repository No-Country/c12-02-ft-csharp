import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  cantidadProductToCart,
  totalProductToCart,
  incrementDecrement
} from "../store/slices/carts/cartSlice";
export const ProductCart = ({ product, handleRemove, handleRemoveToPay }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(product.estado);
  const [quantity, setQuantity] = useState(product.cantidad);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    if (isSelected) dispatch(handleRemoveToPay(product.product.id, product.estado));
  };

  const handleIncrement = () => {
    dispatch(incrementDecrement({ id: product["product"].id, estado: true }));
    setQuantity(product.cantidad);
  };

  const handleDecrement = () => {
    dispatch(incrementDecrement({ id: product["product"].id, estado: false }));
    setQuantity(product.cantidad);
  };

  useEffect(() => {
    setQuantity(product.cantidad);
    setIsSelected(product.estado);
  }, [handleRemove]);

  useEffect(() => {
    if (isSelected) {
      dispatch(cantidadProductToCart({ id: product["product"].id, quantity, isSelected }));
      dispatch(totalProductToCart());
    }
  }, [isSelected, quantity, dispatch]);

  return (
    <>
      <div className="flex gap-4 my-4 bg-indigo-100 pl-4 py-2 md:py-4 pr-6 rounded-lg max-h-48">
        <input type="checkbox" name="" id="" checked={isSelected} onChange={handleSelect} />
        <div className=" max-w-[55px] max-h-14 rounded-full border-2 border-indigo-600 overflow-hidden">
          <img
            src={product.product.image}
            alt=""
            className="w-[100%] h-[80%] object-contain mx-auto mt-1 p-1"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-start justify-between w-full">
            <h2 className="text-xs lg:text-base">{product["product"].name.substr(0, 20)} </h2>
            <button
              onClick={() => {
                handleRemove(product["product"].id);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 lg:w-4 lg:h-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <h2 className="text-sm lg:text-base">{product["product"].price}</h2>
            <div className="flex gap-2">
              <button onClick={handleDecrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </button>
              <span className="text-sm lg:text-base">{quantity}</span>
              <button onClick={handleIncrement}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleRemoveToPay: PropTypes.func.isRequired
};
