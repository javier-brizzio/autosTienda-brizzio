import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {
  const [listado, setListado] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (!id) {
        setListado(items);
      } else {
        const filteredItem = items.filter((item) => item.item.category === id);
        setListado(filteredItem);
      }
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
