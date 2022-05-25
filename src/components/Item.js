import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <div className="gris">Marca: {item.title}</div>
      <img
        width="300"
        height="300"
        align="center"
        src={item.pictureUrl}
        alt="#"
      />
      <div>Precio: U$S {item.price}</div>
      <Link to={"/item/" + item.id}>
        <button onClick={() => console.log(item.id)}>
          Ver detalle del producto
        </button>
      </Link>
      <div className="gris">Stock disponible: {item.stock}</div>
    </div>
  );
};
export default Item;
