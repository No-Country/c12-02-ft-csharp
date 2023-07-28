import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/slices/products/productSlice";
import { useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { ComponentHome } from "../components/ComponentHome";
import { Categorias } from "../components/Categorias";
import banner from "../assets/banner5.jpg";
import banner1 from "../assets/banner4.jpg";
import banner2 from "../assets/banner3.jpg";

function Home() {
  const { products, loading } = useSelector(state => state.products);
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
        loading={loading}
      />
      <div className="w-full bg-indigo-200 mt-4">
        <img src={banner} alt="" className="w-full mx-auto h-full object-cover" />
      </div>
      <ComponentHome
        title="Lo mas vendido"
        icon="💸"
        reverse={true}
        products={products.slice(4, 8)}
        loading={loading}
      />
      <div className="w-full bg-indigo-200 mt-4">
        <img src={banner1} alt="" className="w-full mx-auto h-full object-cover" />
      </div>
      <ComponentHome
        title="Mejor Calificados"
        icon="🌟"
        reverse={false}
        products={products.slice(8, 12)}
        loading={loading}
      />
      <div className="w-full bg-indigo-200 mt-4">
        <img src={banner2} alt="" className="w-full mx-auto h-full object-cover " />
      </div>
    </>
  );
}

export default Home;
