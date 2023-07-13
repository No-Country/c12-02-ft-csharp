import Layout from "./Layout";
import { ProductCart } from "./ProductCart";
import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart } from "../store/slices/carts/cartSlice";

export const Carrito = () => {
  const dispatch = useDispatch();
  const { carrito } = useSelector(state => state.carts);
  const { pagarCarrito } = useSelector(state => state.carts);
  const {total} = useSelector(state => state.carts)
  const handleRemoveProduct = productId => dispatch(removeProductToCart(productId));

  return (
    <Layout>
      <div className=" flex gap-5 w-[90%] mx-auto">
        <div className="w-[70%]">
          <div className="my-10 text-2xl font-bold">
            <h2>Cesta de la compra({carrito.length})</h2>
          </div>

          {carrito.map((pro, index) => (
            <ProductCart
              key={index}
              product={pro["product"]}
              cantidad={pro["cantidad"]}        
              handleRemove={() => handleRemoveProduct(pro["product"].id)}
            />
          ))}
        </div>
        {/* Resumen */}
        <div className="w-[40%] h-96 bg-indigo-200 mt-10 rounded-lg  flex flex-col items-center justify-evenly sticky top-3 mb-4">
          <h2 className="text-3xl font-bold">Resumen</h2>

          {pagarCarrito.map((item, index) => (
            <div key={index} className="px-2 flex items-center justify-around w-[90%]">
              <img src={item.product?.image} alt="" className="w-10 h-10 rounded-full" />
              <h2 className="text-sm">{item.product?.name.substr(0, 15)}</h2>
              <h2 className="text-sm">X{item.cantidad}</h2>
              <h2 className="text-sm">{item.product?.price * item.cantidad}</h2>
            </div>
          ))}
          <div className="flex items-center justify-between w-[80%]">
            <h3 className="text-xl">Total a pagar:</h3>
            <span className="text-2xl">${total}</span>
          </div>
          <button className="bg-orange-400 p-4 rounded-full w-[80%] text-2xl text-gray-200 font-semibold">
            Pagar
          </button>
        </div>
      </div>
    </Layout>
  );
};
