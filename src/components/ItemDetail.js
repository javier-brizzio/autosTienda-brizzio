import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <div className="grisClaro">Detalle de Producto</div>
      <div className="grisClaro">Marca: {item.title}</div>
      <img
        width="300"
        height="300"
        align="center"
        src={item.pictureUrl}
        alt="#"
      />
      <div>Precio: U$S {item.price}</div>
      <div className="grisClaro">Descripción: {item.descripcion}</div>
    </div>
  );
};
export default ItemDetail;
