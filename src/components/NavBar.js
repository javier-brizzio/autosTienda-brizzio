import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../coche.png";
import "../App.css";
import { CartContext } from "../context/CartContext";

export const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="containerNav">
      <nav className="navbar">
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <div className="marca">
            <img src={logo} alt="cartIcon" width="80" align="left" />
            <p className="nombre" href="#">
              Tienda de Autos
            </p>
          </div>
        </Link>
        <ul className="lista">
          <li>
            <Link to={"/category/nuevos"}>Nuevos</Link>
          </li>
          <li>
            <Link to={"/category/usados"}>Usados</Link>
          </li>
          <li>
            <Link to={"/category/coleccion"}>Colección</Link>
          </li>
        </ul>
      </nav>
      {cart.length > 0 ? <CartWidget /> : <></>}
    </div>
  );
};
export default NavBar;
