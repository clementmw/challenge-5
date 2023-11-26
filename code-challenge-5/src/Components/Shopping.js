 import React, { createContext, useState } from 'react'

export const CartContext = createContext(null);


const getDefaultCart = ({list}) => {
  let bot = {}
  for (let i = 101;i < list.length;i++) {
      
    bot[i] = 0;
  }
  return bot;
 };

function Shopping (props) {
 
  const [cartItems, setCartItems] = useState(getDefaultCart());
  

  const addToCart = (itemId)=> {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] +1 }));

  }
  const RemoveFromCart = (itemId)=> {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] -1 }));
  }
  const contextValue = {cartItems, addToCart, RemoveFromCart}


  return (
   <CartContext.Provider value={contextValue}>
    {props.children}
   </CartContext.Provider>
  )
}

export default Shopping