import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "./ItemCount";
let itemList = [];
export default function Cart({ itemCart }) {
  
  

  return (
    <Grid container spacing={1} justifyContent="center">
      {itemList.map((item) => (
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
                <p>Cantidad de items: {item.cantCart}</p>
              </Typography>
              <ItemCount />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
