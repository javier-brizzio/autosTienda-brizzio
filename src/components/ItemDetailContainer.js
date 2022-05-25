import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState([]);
  const { id } = useParams();
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
        let valor = data.autos.filter((it) => it.id == id);
        setDetalle(valor.pop());
      } catch (error) {
        console.log(error);
      }
    };
    getItem();
  }, [id]);
  return (
    <div>
      <ItemDetail item={detalle}></ItemDetail>
    </div>
  );
};
export default ItemDetailContainer;
