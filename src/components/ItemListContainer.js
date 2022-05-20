import React, { useEffect, useState } from "react";
import "../App.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [listado, setListado] = useState([]);
  const nombre = (valor) => {
    return console.log(valor);
  };
  useEffect(() => {
    (async () => {
      const promise = new Promise((acc, rej) => {
        const response = fetch("../autos.json");
        setTimeout(() => {
          acc(response);
        }, 2000);
      });
      try {
        const respuesta = await promise;
        const data = await respuesta.json();
        setListado(data.autos);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="containerList">
      {greeting}
      <ItemList items={listado} />
      <ItemCount stock="10" initial="1" onAdd={nombre} />
    </div>
  );
};
export default ItemListContainer;
