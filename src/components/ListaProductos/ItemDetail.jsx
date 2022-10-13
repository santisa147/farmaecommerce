import { Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";
import React, { useContext } from "react";
import { ItemCount } from "../ItemCount";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "../Cart";
import { CartContext } from "../CartContext";
import { render } from "@testing-library/react";
import { DataContext } from "../DataContext";

export function ItemDetail() {
  const { cartItems, setcartItems } = useContext(CartContext);
  const { items } = useContext(DataContext);
  const { idproduct } = useParams();
  const [producto, setProducto] = useState([]);
  let yaesta = false
  useEffect(() => {
    if (idproduct) {
      setProducto(items.filter((i) => i.id == idproduct));
    }
  }, [idproduct]);
  cartItems.forEach(e => {
    if (e.id == idproduct){
      yaesta = true
    }
    return true
  })
  function handleAddCart(count) {
    if (count >> 0) {
      items.filter((d) => {
        if (d.id == idproduct && yaesta == false) {
          d.cartcant = count;
        }
      });
      console.log(items);
      if(yaesta){
        alert('Ya existe este producto en su carrito')
      }else{setcartItems(cartItems.concat(items.filter((i) => i.id == idproduct)));}
      
    }
  }

  return (
    <Grid container spacing={1} justifyContent="center">
      {producto.map((item) => (
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image="https://www.actron.com.ar/sites/g/files/vrxlpx19316/files/styles/desktop_1000xauto/public/2021-02/capsula-actron-alta-copy-2.png?itok=lL-npfYO"
              alt="ACTRON"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2">
                <p id="itemDesc">{item.description}</p>
                <p id="itemPrice">Precio: {item.price}</p>
                <p id="itemID">Item ID: {item.id}</p>
                <p>Item Category: {item.idcategoria}</p>
              </Typography>
              <ItemCount handleCartAdd={handleAddCart} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
