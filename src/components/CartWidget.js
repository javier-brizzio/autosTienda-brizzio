import React, { useContext, useEffect, useState } from "react";
import cartImg from "../cart.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const [cantidadCompra, setCantidadCompra] = useState(0);
  const { cart } = useContext(CartContext);
  useEffect(() => {
    const sum = cart
      ? cart.map((item) => item.quantity).reduce((prev, curr) => prev + curr, 0)
      : 0;
    setCantidadCompra(sum);
  }, [cart]);

  return (
    <Link to={"/cart"}>
      <div className="cartWidget">
        <div>
          <img src={cartImg} alt="cartIcon" width="60px" />
        </div>
        <p>{cantidadCompra}</p>
      </div>
    </Link>
  );
};
export default CartWidget;
