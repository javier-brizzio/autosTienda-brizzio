import React from "react";
import "../App.css";
import { useState, useEffect } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState();

  const restar = () => setContador(contador > 1 ? contador - 1 : contador);
  const sumar = () => setContador(contador < stock ? contador + 1 : stock);

  useEffect(() => {
    setContador(
      initial !== undefined && initial < stock ? Number(initial) : stock
    );
  }, [initial, stock]);

  return (
    <div className="containerCount">
      <p className="titulo">Producto</p>
      <div className="contador">
        <button onClick={restar} name="menos">
          -
        </button>
        <span>{contador}</span>
        <button onClick={sumar} name="mas">
          +
        </button>
      </div>
      <div className="botonCarrito">
        <button onClick={() => onAdd(contador)}>Agregar al carrito</button>
      </div>
    </div>
  );
};
export default ItemCount;
