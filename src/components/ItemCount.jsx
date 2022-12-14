import React, { useState } from "react";
import { ButtonGroup, Button } from "@mui/material";
export function ItemCount({ handleCartAdd }) {
  const [count, countSeter] = useState(0);

  return (
    <div>
      <p id="countView">{count}</p>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button
          onClick={() => {
            countSeter(count - 1);
          }}
        >
          -
        </Button>
        <Button onClick={()=> handleCartAdd(count)}>Agregar al Carrito</Button>
        <Button
          onClick={() => {
            countSeter(count + 1);
          }}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
}
