import { CartContext } from "../context/CartContext";
import React, { useContext, useEffect } from "react";
import "../index.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {}, []);

  return (
    <div className="cart">
      {cart.map((item) => (
        <div className="cartLine" key={item.id}>
          <div>Marca: {item.title}</div>
          <div>Categoria: {item.category}</div>
          <div>Precio: U$S {item.price}</div>
          <div>Cantidad: {item.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
