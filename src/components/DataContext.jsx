import React, { createContext, useEffect } from "react";
import { useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// const itemList = [
//     {
//       id: 10,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "recetas",
//       cartcant: 0,
//     },
//     {
//       id: 11,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "recetas",
//       cartcant: 0,
//     },
//     {
//       id: 12,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "recetas",
//       cartcant: 0,
//     },
//     {
//       id: 13,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "recetas",
//       cartcant: 0,
//     },
//     {
//       id: 14,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "ventalibre",
//       cartcant: 0,
//     },
//     {
//       id: 15,
//       title: "Actron",
//       description: 150,
//       price: 100,
//       pictureURL: "",
//       idcategoria: "ventalibre",
//       cartcant: 0,
//     },
//   ];
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const[items,setitems]=useState([])
  useEffect(() => {
    const db = getFirestore();
    const collectionRef = collection(db, "product");
    let productoslimpios = []
    getDocs(collectionRef).then((res) => {
      
      res.docs.forEach((item) => {
        const objLimpio = {...item.data(), id: item.id}
        productoslimpios.push(objLimpio)
      });
      
    });
    setitems(productoslimpios)
  }, []);
  
    
  return <DataContext.Provider value={{items}}>{children}</DataContext.Provider>;
};
