import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ item }) => {
  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const promise = new Promise((acc, rej) => {
        const response = fetch("../autos.json");
        setTimeout(() => {
          acc(response);
        }, 2000);
      });
      try {
        const respuesta = await promise;
        const data = await respuesta.json();
        let valor = data.autos.filter((it) => it.id === item);
        setDetalle(valor.pop());
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, []);
  return (
    <div>
      <ItemDetail item={detalle}></ItemDetail>
    </div>
  );
};
export default ItemDetailContainer;
