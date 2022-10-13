import { Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../components/CartContext";


export default function Test() {
  const { cartItems, setcartItems } = useContext(CartContext);
  let carritoVacio = ''
  let a = 0
  
    if(cartItems.length == 0){
      carritoVacio = 'Carrito Vacio'
    }else {
      carritoVacio = ''
    }
  
  return <div><Typography  textAlign={"center"} alignItems={"center"}><p>{carritoVacio}</p></Typography></div>;
}
