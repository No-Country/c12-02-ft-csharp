import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../store/slices/products/productSlice";
/* import  Carousel  from "../components/productdetail/Carousel"; */
import { Carousel } from "../components/Carousel";
import { ComponentHome } from "../components/ComponentHome";
import { Categorias } from "../components/Categorias";
import banner from "../assets/banner.png";

import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

function Home() {
  const {products} = useSelector(state => state.products);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProduct());
  },[dispatch]);


  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const collectionRef = collection(querydb, "products");

    getDocs(collectionRef)
      .then(querySnapshot => {
        const products = [];
        querySnapshot.forEach(doc => {
          products.push({ id: doc.id, ...doc.data() });
        });

        setData(products);
      })
      .catch(error => {
        console.log("Error al obtener los productos:", error);
      });
  }, []);
  
  return (
    <>
      <div className="hidden md:block">
        <Carousel />
      </div>
      <Categorias />
      <ComponentHome title="Ofertas Hot" icon="🔥" reverse={false} products={data.slice(0, 4)} />
      <div className="w-full bg-indigo-200 mt-4 h-[300px]">
        <img src={banner} alt="" className="w-full h-[300px]" />
      </div>
      <ComponentHome title="Lo mas vendido" icon="💸" reverse={true} products={data.slice(4, 8)} />
      <div className="w-full bg-indigo-400 mt-4 h-[300px]"></div>
      <ComponentHome
        title="Mejor Calificados"
        icon="🌟"
        reverse={false}
        products={data.slice(8, 12)}
      />
      <div className="w-full bg-indigo-200 mt-4 h-[300px]"></div>
    </>
  );
}

export default Home;
