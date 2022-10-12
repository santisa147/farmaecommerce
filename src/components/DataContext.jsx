import React, { createContext } from "react";
import { useState } from "react";
const itemList = [
    {
      id: 10,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "recetas",
      cartcant: 0,
    },
    {
      id: 11,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "recetas",
      cartcant: 0,
    },
    {
      id: 12,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "recetas",
      cartcant: 0,
    },
    {
      id: 13,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "recetas",
      cartcant: 0,
    },
    {
      id: 14,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "ventalibre",
      cartcant: 0,
    },
    {
      id: 15,
      title: "Actron",
      description: 150,
      price: 100,
      pictureURL: "",
      idcategoria: "ventalibre",
      cartcant: 0,
    },
  ];
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const[items,setitems]=useState([itemList])
  return <DataContext.Provider value={{itemList}}>{children}</DataContext.Provider>;
};
