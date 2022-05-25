import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <div className="itemDetalle" key={item.id}>
          <div className="item" key={item.id}>
            <Item item={item} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
