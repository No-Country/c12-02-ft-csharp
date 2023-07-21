import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import Carousel from "../components/productdetail/Carousel";
import DescriptionAside from "../components/productdetail/DescriptionAside";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
// import { Card } from "../components/Card";
import { useParams } from "react-router-dom";
import RecommendedProducts from "../components/productdetail/RecommendedProducts";

const ProductDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "products", id);
      const docSnapshot = await getDoc(queryDoc);
      const data = { id: docSnapshot.id, ...docSnapshot.data() };
      setData(data);
      window.scrollTo(0, 0);
    };

    fetchData();
  }, [id]);

  const [count, setCount] = useState(1);
  const incrementar = () => {
    setCount(count + 1);
  };
  const decrementar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <>
      <div className="bg-grey flex flex-col justify-center px-4 pr-6 mt-4 w-full">
        <p className="flex gap-5 text-gray-500 ml-5">
          <span>
            <FaLongArrowAltLeft className="cursor-pointer h-full items-center" />
          </span>
          | <span>{data.category}</span> |{" "}
          <span>{data.name?.split(" ").slice(0, 5).join(" ")}</span>
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className="bg-white flex flex-col w-full py-14">
            <div className="flex flex-col gap-5 md:flex-row w-full mr-10 md:mx-6 ">
              <div className="bg-white w-full md:w-3/6">
                <Carousel images={data?.image} />
              </div>
              <div className="bg-white w-full md:w-3/6 mr-5">
                <DescriptionAside
                  name={data.name}
                  category={data.category}
                  rating={data.rating}
                  price={data.price}
                  brand={data.brand}
                  description={data.description}
                />
                <div className="border-t-2 py-5 flex flex-wrap gap-5">
                  <div className="py-2 px-5 border-2 flex gap-5 rounded-md">
                    <span className="cursor-pointer" onClick={decrementar}>
                      -
                    </span>
                    <span>{count}</span>
                    <span className="cursor-pointer" onClick={incrementar}>
                      +
                    </span>
                  </div>
                  <button className="py-2 px-5 rounded-md flex gap-2 items-center text-white font-semibold bg-[#5046E3]">
                    <AiOutlineShoppingCart />
                    Agregar al carrito
                  </button>
                  <button className="py-2 px-3 border-2 border-[#5046E3] rounded-md text-[#5046E3]">
                    <AiOutlineHeart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] md:w-full items-center mx-auto md:items-start p-2 ">
        <p className="font-bold my-5">Productos similares:</p>
        <RecommendedProducts category={data.category} />
      </div>
    </>
  );
};

export default ProductDetail;
