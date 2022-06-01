import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const [terminaCompra, setTerminaCompra] = useState(false);
  const Agregar = (valor) => {
    setQuantity(valor);
    setTerminaCompra(true);
  };

  const finalizarCompra = () => {
    addItem(item, quantity);
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
        <Link to={"/cart"}>
          <button onClick={() => finalizarCompra()}>Terminar mi compra</button>
        </Link>
      ) : (
        <ItemCount stock="10" initial="1" onAdd={Agregar} />
      )}
    </div>
  );
};
export default ItemDetail;
