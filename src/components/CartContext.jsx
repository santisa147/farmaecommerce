import React, { createContext, useState } from 'react'
export const CartContext =createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setcartItems] = useState([])
    
  return (
    <CartContext.Provider value={{cartItems, setcartItems}}>
        {children}
    </CartContext.Provider>
  )
}
