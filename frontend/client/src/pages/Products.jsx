import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import CategoryFilter from "../components/CategoryFilter";
import { Card } from "../components/Card";
import ProductsCards from "../components/ProductsCards";
import {PriceFilter} from "../components/PriceFilter";

const Products = () => {
  const [data, setData] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState([]);

  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(1500)

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

  const handleChangeMinPrice = event => {
    setSelectedMinPrice(event.target.value)
  }

  const handleChangeMaxPrice = event => {
    setSelectedMaxPrice(event.target.value)
  }

  const handleChange = event => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategory(prevSelectedCategories => [...prevSelectedCategories, value]);
    } else {
      setSelectedCategory(prevSelectedCategories =>
        prevSelectedCategories.filter(category => category !== value)
      );
    }
  };

  const filteredProducts = data.filter(({ category, price }) =>
  (selectedCategory.length === 0 || selectedCategory.includes(category)) &&
  price >= selectedMinPrice && price <= selectedMaxPrice
  );

  const result = filteredProducts.map((pro, index) => <Card key={index} product={pro} />);

  const props = {
    handleChangeMinPrice: handleChangeMinPrice,
    handleChangeMaxPrice: handleChangeMaxPrice,
    selectedMinPrice: selectedMinPrice,
    selectedMaxPrice: selectedMaxPrice
  }

  return (
    <div className="flex max-w-[1400px] mx-auto px-5 my-8">
      <div className="w-1/4 flex flex-col gap-4">
        <CategoryFilter data={data} handleChange={handleChange} />
        <PriceFilter {...props} />
      </div>
      <ProductsCards result={result} />
    </div>
  );
};

export default Products;