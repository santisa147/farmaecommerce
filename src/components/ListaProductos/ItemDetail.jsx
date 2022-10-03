import { Card, CardContent, Grid, Typography, CardMedia } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function ItemDetail({ prod }) {
  // const [producto, setProducto] = useState([]);
  // useEffect(() => {
  //   let itemProm = new Promise((res) => {
  //     setTimeout(() => {
  //       res(items);
  //     }, 2000);
  //   });
  //   itemProm.then((res) => {
  //     setProducto(res);
  //   });
  // });
  return (
    <Grid container spacing={4}>
      {prod.map((item) => (
        <Grid item>
          <Card>
          <CardMedia
          component="img"
          height="140"
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
              </Typography>
            </CardContent>

           
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
