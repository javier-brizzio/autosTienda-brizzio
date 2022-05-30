import { createContext, useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);

  useEffect(() => {}, []);

  const addItem = (item, quantity) => {
    const existe = isInCart(item.id);
    if (!existe) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      alert("el item ya se encuentra en el carrito");
    }
  };

  const removeItem = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clear = () => {
    cart = [];
  };

  const isInCart = (id) =>
    cart.find((cartElem) => cartElem.id === id) ? true : false;

  return (
    <CartContext.Provider value={{ addItem, cart, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const CartContext = createContext();
