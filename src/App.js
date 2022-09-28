import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "@emotion/react";
import theme from "./ThemeConfig";
import Bienvenida from "./components/Bienvenida";
import "../src/main.css";
import ListaProductosContainer from "./components/ListaProductos/ListaProductosContainer";
import { ItemCount } from "./components/ItemCount";
import { Grid } from "@mui/material";
import { Fetch } from "./Test/Fetch";
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar id="NavBar" />

      <main>
        {/* <div id="bienvenida">
          <Bienvenida name="Santiago" />
          <Bienvenida name="Juan" />
          <Bienvenida name="Carlos" />
        </div> */}
        <div id="listaProd">
          <ListaProductosContainer></ListaProductosContainer>
        </div>
        {/* <div id="itemCount">
          <ItemCount />
        </div> */}
        {/* <Fetch/> */}
      </main>

    </ThemeProvider>
  );
}

export default App;
