import React from "react"
import '../App.css';

export const ItemListContainer = ({greeting}) => {
    return(
        <div className="containerList">
            {greeting}
        </div>
    )
}
export default ItemListContainer