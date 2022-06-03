import { CartContext } from "../context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  doc,
} from "firebase/firestore";

const Cart = () => {
  const { cart, removeItem, clear, updateCart } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [deshabilitado, setDeshabilitado] = useState(true);
  const eliminaCarrito = () => {
    clear();
  };

  const batchOperation = async () => {
    const totalCompra = cart
      .map((item) => item.quantity * item.price)
      .reduce((prev, curr) => prev + curr, 0);
    const date = new Date().toISOString().split("T")[0];
    const orden = {
      comprador: {
        nombre: nombre,
        telefono: telefono,
        email: email,
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      date: date,
      total: totalCompra,
    };
    const dbOrden = getFirestore();
    const db = getFirestore();
    const batch = writeBatch(db);
    const ordenesCollection = collection(dbOrden, "ordenes");
    cart.forEach((c) => {
      c.stock - c.quantity >= 0
        ? batch.update(doc(db, "items", c.id), {
            "item.stock": c.stock - c.quantity,
          })
        : console.log("Sin stock: ", c.title);
    });
    batch.commit();
    addDoc(ordenesCollection, orden).then(({ id }) =>
      alert(`Se generó orden con id:  ${id}`)
    );
    updateCart();
  };

  useEffect(() => {
    if (nombre !== "" && email !== "" && telefono !== "" && cart) {
      setDeshabilitado(false);
    } else {
      setDeshabilitado(true);
    }
  }, [nombre, telefono, email, cart]);

  return (
    <div className="cart">
      <Link to={"/"}>
        <div>
          <button onClick={() => eliminaCarrito()}>Eliminar Carrito</button>
        </div>
      </Link>
      <div className="cartLine">
        <input
          type="text"
          placeholder="Nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Telefono"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {cart.map((item) => (
        <div className="cartLine" key={item.id}>
          <div>Marca: {item.title}</div>
          <div>Categoria: {item.category}</div>
          <div>Precio: U$S {item.price}</div>
          <div>Cantidad: {item.quantity}</div>
          <div>Total: U$S {item.quantity * item.price}</div>
          <button onClick={() => removeItem(item.id)}>Eliminar Item</button>
        </div>
      ))}
      <Link to={"/"}>
        <button
          hidden={deshabilitado}
          id="buttonCompra"
          onClick={batchOperation}
        >
          Comprar
        </button>
      </Link>
    </div>
  );
};

export default Cart;
