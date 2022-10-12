import React from "react";
import "../src/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetail } from "./components/ListaProductos/ItemDetail";
import { ItemDetailContainer } from "./components/ListaProductos/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Test from "./Test/Test";
import { ThemeProvider } from "@mui/material";
import theme from "./ThemeConfig";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import { DataProvider } from "./components/DataContext";
const items = [
  {
    id: 10,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
    cartcant: 0,
  },
  {
    id: 11,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
    cartcant: 0,
  },
  {
    id: 12,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
    cartcant: 0,
  },
  {
    id: 13,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "recetas",
    cartcant: 0,
  },
  {
    id: 14,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "ventalibre",
    cartcant: 0,
  },
  {
    id: 15,
    title: "Actron",
    description: 150,
    price: 100,
    pictureURL: "",
    idcategoria: "ventalibre",
    cartcant: 0,
  },
];
export function App() {
  return (
    <DataProvider>
    <CartProvider>
      <div>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/test" element={<Test />} />
              <Route path="/" element={<ItemDetailContainer items={items} />} />
              <Route
                path="/category/:idcategory"
                element={<ItemDetailContainer items={items} />}
              />
              <Route
                path="/product/:idproduct"
                element={<ItemDetail  />}
              />

              <Route path="/cart" element={<Cart  />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </CartProvider>
    </DataProvider>
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
