import React from "react";

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
      <button onClick={() => console.log(item.id)}>
        Ver detalle del producto
      </button>
      <div className="gris">Stock disponible: {item.stock}</div>
    </div>
  );
};
export default Item;
