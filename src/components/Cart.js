import { CartContext } from "../context/CartContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);
  const eliminaCarrito = () => {
    clear();
  };

  return (
    <div className="cart">
      <Link to={"/"}>
        <div>
          <button onClick={() => eliminaCarrito()}>Eliminar Carrito</button>
        </div>
      </Link>

      {cart.map((item) => (
        <div className="cartLine" key={item.id}>
          <div>Marca: {item.title}</div>
          <div>Categoria: {item.category}</div>
          <div>Precio: U$S {item.price}</div>
          <div>Cantidad: {item.quantity}</div>
          <button onClick={() => removeItem(item.id)}>Eliminar Item</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
