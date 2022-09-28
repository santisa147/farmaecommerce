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
          image="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
          alt="green iguana"
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

            {/* <img src={item.pictureURL} id="imgProd" />; */}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
