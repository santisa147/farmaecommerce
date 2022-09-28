import { Grid, Paper } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function Item({ prod }) {
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
          <Paper>
            <p id="itemID">Item ID: {item.id}</p>
            <h1 id="itemTitle">Titulo: {item.title}</h1>
            <p id="itemDesc">{item.description}</p>
            <p id="itemPrice">Precio: {item.price}</p>
            {/* <img src={item.pictureURL} id="imgProd" />; */}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
