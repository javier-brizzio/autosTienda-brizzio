import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import ItemList from "./ItemList";

export const ItemListContainer = ({ greeting }) => {
  const [listado, setListado] = useState([]);
  const { id } = useParams();
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
        let valor = id
          ? data.autos.filter((it) => it.category === id)
          : data.autos;
        setListado(valor);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div className="containerList">
      {greeting}
      <ItemList items={listado} />
    </div>
  );
};
export default ItemListContainer;
