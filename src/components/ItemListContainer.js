import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import ItemList from "./ItemList";
import { getItems } from "../app/api";

export const ItemListContainer = ({ greeting }) => {
  const [listado, setListado] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItems().then((res) => {
      let valor = id ? res.filter((it) => it.item.category === id) : res;
      setListado(valor);
    });
  }, [id]);

  return (
    <div className="containerList">
      {greeting}
      <ItemList items={listado} />
    </div>
  );
};
export default ItemListContainer;
