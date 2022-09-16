import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import '../src/main.css'
import { ThemeProvider } from '@emotion/react';
import theme from './ThemeConfig';
import { Button } from '@mui/material';
export function App() {
  
  return (
    
    <ThemeProvider theme={theme}>
      <NavBar />
      <Button>Boton1</Button>
    </ThemeProvider>
    
    
  );
}

export default App;
