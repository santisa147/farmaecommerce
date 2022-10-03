import { Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
const items = [
  {
    id: 10,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
  },
  {
    id: 11,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
  },
  {
    id: 12,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
  },
  {
    id: 13,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
  },
  {
    id: 14,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "ventalibre",
  },
  {
    id: 15,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "ventalibre",
  },
];

export function ItemDetailContainer({}) {
  // const [detalles, setDetalles] = useState(False);
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState("");
  const { idcategory } = useParams();
  useEffect(() => {
    if (!idcategory) {
      setProductos(items);
    } else {
      setProductos(productos.filter((prod) => prod.idcategoria == idcategory));
    }
  }, [idcategory]);

  return(<Grid container>
    {productos.map((item) =>
      (<Grid item>
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
          </CardContent>
        </Card>
        <Link to={"/product/:id"}>
          <Button>Detalles de Producto</Button>
        </Link>
      </Grid>)
    )}
  </Grid>)
}
