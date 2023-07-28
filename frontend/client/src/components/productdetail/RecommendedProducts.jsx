import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import PropTypes from "prop-types";
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
  const fourProducts = filteredProducts.slice(0, 4);

  return (
    <div className="flex flex-col  md:flex-row w-full items-center justify-between transition-transform ease-out duration-500">
      {fourProducts && fourProducts.map((pro, index) => <Card key={index} product={pro} />)}
    </div>
  );
};

export default RecommendedProducts;

RecommendedProducts.propTypes = {
  category: PropTypes.string.isRequired
};
