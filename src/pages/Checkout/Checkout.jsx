import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../db/db';
import NavBar from "../../componentes/nav/Navbar";
import "./Checkout.css";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { cart, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: precioTotal()
    }
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido)
      .then((doc) => {
        setPedidoId(doc.id);
        vaciarCarrito();
      })
  }

  if (pedidoId) {
    return (
      <>
        <NavBar />
        <div className="container">
          <h1 className="main-title">Muchas gracias por tu compra</h1>
          <p className="main-subtitle">Tu número de pedido es: {pedidoId}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="info__div">
      <h2 className="info__h2">Datos Personales</h2>
      <span className="info__span">Datos Personales</span>

      </div>
      <div className="container">
        <h3 className="main-title">Ingrese sus datos</h3>
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
          <input type="text" className="formulario-input" placeholder="Ingresá tu nombre" {...register("nombre")} />
          <input type="email" className="formulario-input" placeholder="Ingresá tu e-mail" {...register("email")} />
          <input type="tel" className="formulario-input" placeholder="Ingresá tu teléfono" {...register("telefono")} />
          <button className="formulario-submit" type="submit">Comprar</button>
        </form>
      </div>
    </>
  );
}

export default Checkout;