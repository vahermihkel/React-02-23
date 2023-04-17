import React, { useState, createContext } from 'react';

const CartSumContext = createContext();

const CartSumContextProvider = (props) => {
  const [cartSum, setCartSum] = useState(calculateTotalSum());

  function calculateTotalSum() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum.toFixed(2);
  }

  return (
    <CartSumContext.Provider value={{ cartSum, setCartSum }}>
      {props.children}
    </CartSumContext.Provider>
  )
}

export { CartSumContext, CartSumContextProvider };