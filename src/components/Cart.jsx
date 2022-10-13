import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import { ItemCount } from "./ItemCount";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { render } from "@testing-library/react";
import { DataContext } from "./DataContext";
import Test from "./CarritoVacio";
import CarritoVacio from "./CarritoVacio";

export default function Cart() {
  const { cartItems, setcartItems } = useContext(CartContext);
  const { items } = useContext(DataContext);
  let a = 1;
  function carritoVacio() {
    if (a == 1) {
      console.log('carritovacio')
      {<Typography><p>Carrito Vacio</p></Typography>}
    }
  }
  function handleDelete(id) {
    items.filter((d) => {
      if (d.id == id) {
        d.cartcant = 0;
      }
    });
    setcartItems(cartItems.filter((i) => i.id != id));
  }
  function handleClear() {
    render();
    setcartItems([]);
    items.forEach((element) => {
      element.cartcant = 0;
    });
  }
  return (
    <div>
      <Grid container spacing={1} justifyContent="center">
        {cartItems.map((item) => (
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
                  <p>Cantidad de items: {item.cartcant}</p>
                </Typography>
                <ButtonGroup>
                  <Button onClick={() => handleDelete(item.id)}>
                    Eliminar Producto
                  </Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CarritoVacio></CarritoVacio>

      <div id="trashIcon">
        <IconButton onClick={handleClear}>
          <DeleteForeverIcon
            color={"primary"}
            fontSize={"large"}
            justifyContent={"center"}
          ></DeleteForeverIcon>
        </IconButton>
      </div>
      
    </div>
  );
}
