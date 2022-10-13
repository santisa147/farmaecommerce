import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { render } from "@testing-library/react";

export function ItemDetailContainer() {
  const [productos, setProductos] = useState([]);
  const { idcategory } = useParams();
  const [productoslimpios, setproductoslimpios] = useState([]);
  useEffect(() => {
    
      const db = getFirestore();
      const collectionRef = collection(db, "product");
      getDocs(collectionRef).then((res) => {
        setproductoslimpios(
          res.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
      });
    
  }, []);
  useEffect(() => {
    if (!idcategory) {
      setProductos(productoslimpios);
    } else {
      setProductos(
        productoslimpios.filter((prod) => prod.idcategoria == idcategory)
      );
    }
    console.log(productos);
  }, [idcategory]);

  return (
    <Grid container>
      {productos.map((item) => (
        <div key={item.id}>
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
        </div>
      ))}
    </Grid>
  );
}
