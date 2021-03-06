import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getItemById } from "../app/api";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getItemById(id).then((res) => {
      setDetalle({ ...res.item, id });
    });
  }, [id]);
  return (
    <div>
      <ItemDetail item={detalle}></ItemDetail>
    </div>
  );
};
export default ItemDetailContainer;
