import { AppBar, Toolbar, Typography , ThemeProvider, makeStyles, Button} from '@mui/material';
import * as React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import theme from '../../ThemeConfig';





const NavBar = () => {
  
  return (
    <div>
      <AppBar>
        <Toolbar> 
          <Typography variant='h6' flexGrow={1}>
            Farma-Ecommerce
          </Typography>
          <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          
        </Toolbar>
      </AppBar>
      
    </div>
   
  );
};
export default NavBar;
