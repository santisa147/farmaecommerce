import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
export default function Test() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "product");
    getDocs(collectionRef).then((res) => {
      let productoslimpios = []
      res.docs.forEach((item) => {
        const objLimpio = {...item.data(), id: item.id}
        productoslimpios.push(objLimpio)
      });
      console.log(productoslimpios)
    });
  }, []);

  return <div>Test</div>;
}
