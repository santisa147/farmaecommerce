import { ThemeProvider } from "@emotion/react";
import React from "react";
import "../src/main.css";
import ListaProductosContainer from "./components/ListaProductos/ListaProductosContainer";
import NavBar from "./components/NavBar/NavBar";
import theme from "./ThemeConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemDetail } from "./components/ListaProductos/ItemDetail";
import { ItemDetailContainer } from "./components/ListaProductos/ItemDetailContainer";
export function App() {
  return (
    <>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemDetailContainer />} />
          <Route path="/category/:idcategory" element={<ItemDetailContainer />} />
          <Route path="/product/:idproduct"  />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// <ThemeProvider theme={theme}>
//   <NavBar id="NavBar" />

//   <main>
//     {/* <div id="bienvenida">
//       <Bienvenida name="Santiago" />
//       <Bienvenida name="Juan" />
//       <Bienvenida name="Carlos" />
//     </div> */}
//     <div id="listaProd">
//       <ListaProductosContainer></ListaProductosContainer>
//     </div>
//     {/* <div id="itemCount">
//       <ItemCount />
//     </div> */}
//     {/* <Fetch/> */}
//   </main>

// </ThemeProvider>
