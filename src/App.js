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
export function App() {
  return (
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
            element={<ItemDetail prod={items} />}
          />
          
          <Route path="/cart" element={<Cart itemCart={items}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
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
