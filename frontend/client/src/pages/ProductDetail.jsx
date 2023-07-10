import { useState } from "react";
import Carousel from "../components/productdetail/Carousel";
import DescriptionAside from "../components/productdetail/DescriptionAside";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Card } from "../components/Card";

const ProductDetail = () => {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const product = {
    id: 1,
    name: "SAMSUNG Galaxy A14 4G LTE (128GB + 4GB) Unlocked Worldwide (Only T-Mobile/Mint/Metro USA Market) 6.6 pulg 50MP Triple Camera + (15W Wall Charger) (Silver (SM-A145M/DS))",
    category: "Celulares",
    price: 145.99,
    description: [
      "Charger Sold Separately, 6.6'' FHD+, 1080 x 2408, 20:9 ratio (~400 ppi density), PLS LCD, Android 13, One UI Core 5",
      "128GB ROM, 4GB RAM, Expandable MicroSD, Mediatek MT6769 Helio G80 (12 nm), Octa-core, Mali-G52 MC2, Fingerprint (side-mounted)",
      "Rear Camera: 50MP, f/1.8, (wide) + 5MP, f/2.2, (ultrawide) + 2MP, f/2.4, (macro), Front Camera: 13MP, f/2.0, 5000 mAh Battery",
      "2G: 850/900/1800/1900, 3G: 850/900/1700/1900, 4G LTE: B1(2100)/2(1900)/3(1800)/4(AWS)/5(850)/7(2600)/8(900)/12(700)/13(700)/17(700)/26(850)/28(700)/38(2600)/40(2300)/41(2500)/66(AWS-3) - Dual SIM",
      "International Model - No Warranty in the US. Compatible with Most GSM Carriers like T-Mobile, MetroPCS, etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost",
      "ManufacturerSamsung"
    ],
    rating: 4.5,
    brand: "Samsung",
    availability: true,
    image: [
      "https://m.media-amazon.com/images/I/717yeZFskGL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61KL9IywnnL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51JrrA-vb9L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61JCR8B15IL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51MyzoDYSNL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71U3plLQi6L._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/61efcF9oq4L._AC_SX679_.jpg"
    ]
  };

  return (
    <div>
      <div className="bg-grey flex flex-col justify-center content-center px-0 sm:px-24 py-6 w-100">
        <p className="flex gap-5 text-gray-500 ml-5">
          <span>
            <FaLongArrowAltLeft className="cursor-pointer h-full items-center" />
          </span>
          | <span>{product.category}</span> |{" "}
          <span>{product.name.split(" ").slice(0, 3).join(" ")}</span>
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className="bg-white flex flex-col w-100 py-14">
            <div className="flex flex-col gap-5 md:flex-row w-100 mx-6 md:mx-16">
              <div className="bg-white w-full md:w-3/6">
                <Carousel images={product.image} />
              </div>
              <div className="bg-white w-full md:w-3/6">
                <DescriptionAside
                  name={product.name}
                  category={product.category}
                  rating={product.rating}
                  price={product.price}
                  brand={product.brand}
                  description={product.description}
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
                  <button className="py-2 px-5 bg-[#5046E3] rounded-md flex gap-2 items-center text-white font-semibold">
                    <AiOutlineShoppingCart />
                    Agregar al carrito
                  </button>
                  <button className="py-2 px-3 border-2 border-[#5046E3] rounded-md text-[#5046E3]">
                    <AiOutlineHeart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <p className="font-bold my-5">Productos similares:</p>
            <div className="grid grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
