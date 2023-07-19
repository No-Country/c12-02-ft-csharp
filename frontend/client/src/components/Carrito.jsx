import Layout from "./Layout";
import { useState, useEffect } from "react";
import { ProductCart } from "./ProductCart";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart, removeProductToPay } from "../store/slices/carts/cartSlice";

export const Carrito = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const { carrito } = useSelector(state => state.carts);
  const { pagarCarrito } = useSelector(state => state.carts);
  const { total } = useSelector(state => state.carts);
  const handleRemoveProduct = productId => dispatch(removeProductToCart(productId));
  const handleClick = (productId, estado) =>
    dispatch(removeProductToPay({ id: productId, estado }));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Layout>
      <div className=" flex flex-col md:flex-row gap-5 w-[90%] mx-auto">
        <div className="w-full md:w-[50%] lg:w-[70%]">
          <div className="my-10 text-2xl font-bold">
            <h2>Cesta de la compra({carrito.length})</h2>
          </div>

          {carrito.map((pro, index) => (
            <ProductCart
              key={index}
              product={pro}
              handleRemove={() => handleRemoveProduct(pro["product"].id)}
              handleRemoveToPay={() => handleClick(pro.product.id, pro.estado)}
            />
          ))}
        </div>
        {/* Resumen */}

        <div className="w-full md:w-[50%]  h-16 md:h-96 bg-indigo-200 mt-10 rounded-lg  flex justify-between  items-center mb:justify-evenly mb:sticky top-3 mb-4 flex-row md:flex-col ">
          <h2 className="text-3xl font-bold hidden md:block">Resumen</h2>
          <div className={`overflow-y-auto w-full mb-4 ${windowWidth < 768 ? "hidden" : ""}`}>
            {pagarCarrito.map((item, index) => (
              <div key={index} className="px-2 flex items-center justify-around w-full mb-4">
                <div className="max-w-[55px] max-h-14 rounded-full border-2 border-indigo-600 overflow-hidden flex items-center">
                  <img
                    src={item.product?.image}
                    alt=""
                    className="w-[90%] object-contain  mx-auto mt-1 p-1"
                  />
                </div>

                <h2 className="text-sm">
                  {item.product?.name.charAt(0).toUpperCase() + item.product?.name.slice(1, 15)}
                </h2>
                <h2 className="text-sm">X{item.cantidad}</h2>
                <h2 className="text-sm">{(item.product?.price * item.cantidad).toFixed(2)}</h2>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-evenly w-[70%] md:w-[80%]">
            <h3 className="text-lg ml-2 md:ml-0md:text-xl">Total a pagar:</h3>
            <span className="text-xl md:text-2xl">${total.toFixed(2)}</span>
          </div>
          <button className="bg-orange-400 px-2 py-3  mr-2 md:mr-0 md:p-4 rounded-full md:rounded-none w-[22%] md:w-full text-base md:text-2xl text-gray-200 font-semibold">
            Pagar
          </button>
        </div>
      </div>
    </Layout>
  );
};
