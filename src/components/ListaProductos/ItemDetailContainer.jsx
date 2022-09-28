import React, { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
export function ItemDetailContainer({ items }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    let promesaProducto = new Promise((res) => {
      setTimeout(() => {
        res(items);
      }, 2000);
    });
    promesaProducto
      .then((res) => {
        setProductos(res);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      })
      .finally(console.log(productos));
  }, []);
  return <ItemDetail prod={productos} />;
}
