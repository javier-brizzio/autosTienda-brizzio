import React from "react"
import CartWidget from "./CartWidget"
import logo from '../coche.png'
import '../App.css';

export const NavBar = () => {
    return(
        <div className="containerNav">
         <nav className="navbar" >
             <div className="marca">
                <img src={logo} alt="cartIcon" width="80" align="left"/>
                <p className="nombre" href="#">Tienda de Autos</p>
             </div>
             <ul className="lista">
                 <li>
                     <a className="link" href="#">Usados</a>
                 </li>
                 <li >
                     <a className="link" href="#">Nuevos</a>
                 </li>
                 <li>
                     <a className="link" href="#">Colección</a>
                 </li>
             </ul>
             </nav>  
             <CartWidget/>
        </div>
    )
}
export default NavBar