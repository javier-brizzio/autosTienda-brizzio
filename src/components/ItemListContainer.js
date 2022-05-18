import React from "react"
import '../App.css';
import ItemCount from "./ItemCount"

export const ItemListContainer = ({greeting}) => {
    const nombre = ( valor ) => {
        return (
            console.log(valor)
        )
    }
    return(
        <div className="containerList">
            {greeting}
            <ItemCount stock='10' initial='1' onAdd={ nombre } />
        </div>
    )
}
export default ItemListContainer