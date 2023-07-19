import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Card } from "../Card";

const RecommendedProducts = ({ category }) => {
  // const [category, setCategory] = useState("Celulares");
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

  const filteredProducts = data.filter(pro => pro.category === category);

  return (
    <div className="w-full h-[20%] justify-center flex flex-wrap gap-2">
      {filteredProducts && filteredProducts.map((pro, index) => <Card key={index} product={pro} />)}
    </div>
  );
};

export default RecommendedProducts;
