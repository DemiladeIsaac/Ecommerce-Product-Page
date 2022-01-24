import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  totalCart: 0,
  addCart: (item) => {},
});

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCartHandler(item) {
    setCart((prevItems) => {
      return prevItems.concat(item);
    });
  }

  const context = {
    items: cart,
    totalCart: cart.length,
    addCart: addCartHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export default CartContext;
