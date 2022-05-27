import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [terminaCompra, setTerminaCompra] = useState(false);
  const Agregar = (valor) => {
    setTerminaCompra(true);
  };

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
      {terminaCompra ? (
        <button>
          <Link to={"/cart"}>Terminar mi compra</Link>
        </button>
      ) : (
        <ItemCount stock="10" initial="1" onAdd={Agregar} />
      )}
    </div>
  );
};
export default ItemDetail;
