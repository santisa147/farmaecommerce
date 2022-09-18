import { Card } from "@mui/material";
import React from "react";

export default function ListaProductosLayout(productos) {
  return <Card>{JSON.stringify(productos)}</Card>;
}
