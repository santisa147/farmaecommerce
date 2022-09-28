import React from "react";
import { ItemList } from "./ItemList";

export default function ListaProductosContainer() {
  const productos = [
    { id: 10, title: "Nike", description: 150, price: 100, pictureURL: "" },
    { id: 11, title: "Nike", description: 150, price: 100, pictureURL: "" },
    { id: 12, title: "Nike", description: 150, price: 100, pictureURL: "" },
    // { id: 13, title: "Nike", description: 150, price: 100, pictureURL: "" },
    // { id: 14, title: "Nike", description: 150, price: 100, pictureURL: "" },
    // { id: 15, title: "Nike", description: 150, price: 100, pictureURL: "" },
  ];

  return <ItemList items={productos} />;
}
