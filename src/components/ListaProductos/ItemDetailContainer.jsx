import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../DataContext";

export function ItemDetailContainer() {
  const { items } = useContext(DataContext);
  const [productos, setProductos] = useState([]);
  const { idcategory } = useParams();

  useEffect(() => {
    console.log(items)
    if (!idcategory) {
      setProductos(items);
    } else {
      setProductos(items.filter((prod) => prod.idcategoria == idcategory));
    }
  }, [idcategory]);

  return (
    <Grid container>
      {productos.map((item) => (
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
            </CardContent>
          </Card>
          <Link to={"/product/" + item.id}>
            <Button>Detalles de Producto</Button>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}
