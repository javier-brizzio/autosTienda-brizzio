import React from "react";
import cart from '../cart.png'

export const CartWidget = () =>{
    return(
        <div className="cartWidget">
            <div >
                <img src={cart} alt="cartIcon" width="60px" />
            </div>
            <p>0</p>
        </div>
    );
}
export default CartWidget