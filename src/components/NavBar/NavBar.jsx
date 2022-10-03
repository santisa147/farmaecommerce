import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link, useParams } from "react-router-dom";

export default function NavBar() {

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Farma-Ecommerce
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <Link to={"/"} replace>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Home
                </Button>
              </Link>
              <Link to={"/category/ventalibre"} replace>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Venta Libre
                </Button>
              </Link>
              <Link to={"/category/recetas"} replace>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Recetas
                </Button>
              </Link>
              <Link to={"/product/12"}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  Producto
                </Button>
              </Link>
            </MenuItem>
          </Box> 
          <ShoppingCartOutlinedIcon aling={"right"}></ShoppingCartOutlinedIcon>
        </Toolbar>
      </AppBar>
    </div>
  );
}
