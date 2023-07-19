import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../firebase/firebase";

const useFirestoreData = products => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const collectionRef = collection(db, products);
      const querySnapshot = await getDocs(collectionRef);
      const newData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setData(newData);
    };

    fetchData();
  }, [products]);

  return data;
};

export default useFirestoreData;
