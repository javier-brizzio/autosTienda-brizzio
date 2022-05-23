import React from "react";
import Item from "./Item";

import ItemDetailContainer from "./ItemDetailContainer";

const ItemList = ({ items }) => {
  return (
    <div className="itemList">
      {items.map((item) => (
        <div className="itemDetalle" key={item.id}>
          <div className="item" key={item.id}>
            <Item item={item} />
          </div>
          <div>
            <ItemDetailContainer item={item.id}></ItemDetailContainer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
