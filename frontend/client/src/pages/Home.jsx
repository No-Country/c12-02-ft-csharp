import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/slices/products/productSlice";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { ComponentHome } from "../components/ComponentHome";
import { Categorias } from "../components/Categorias";
import banner from "../assets/banner.png";

function Home() {
  const { products } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <div className="hidden md:block">
        <Carousel />
      </div>
      <Categorias />
      <ComponentHome
        title="Ofertas Hot"
        icon="🔥"
        reverse={false}
        products={products.slice(0, 4)}
      />
      <div className="w-full bg-indigo-200 mt-4 h-[300px]">
        <img src={banner} alt="" className="w-full h-[300px]" />
      </div>
      <ComponentHome
        title="Lo mas vendido"
        icon="💸"
        reverse={true}
        products={products.slice(4, 8)}
      />
      <div className="w-full bg-indigo-400 mt-4 h-[300px]"></div>
      <ComponentHome
        title="Mejor Calificados"
        icon="🌟"
        reverse={false}
        products={products.slice(8, 12)}
      />
      <div className="w-full bg-indigo-200 mt-4 h-[300px]"></div>
    </>
  );
}

export default Home;
