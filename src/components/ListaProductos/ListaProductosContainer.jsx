import React from "react";
import ListaProductosLayout from "./ListaProductosLayout";

export default function ListaProductosContainer() {
  const productos = [
    { id: 10, marca: "Nike", precio: 150 },
    { id: 11, marca: "Nike", precio: 150 },
    { id: 12, marca: "Nike", precio: 150 },
    { id: 13, marca: "Nike", precio: 150 },
    { id: 14, marca: "Nike", precio: 150 },
    { id: 15, marca: "Nike", precio: 150 },
  ];

  return <ListaProductosLayout productos={productos}/>
}
