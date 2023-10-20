import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import NavBar from "../../componentes/nav/Navbar";
import { Link } from "react-router-dom";



const Cart = () => {
    const { cart, precioTotal, vaciarCarrito, } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div>
            <NavBar />
            <div className="cart__div">
            <h2 className="cart__h2">Carrito</h2>
            <span className="cart__span">Carrito</span>
            </div>

            {cart.map((prod) => (
                <div key={prod.id} className="producto">
                    <img src={prod.imagen} alt={prod.titulo} className="imagen-producto" />
                    <h3 className="titulo-producto">{prod.titulo}</h3>
                    <p className="precio-producto">${prod.price * prod.cantidad}</p>
                    <p className="cantidad-producto">Cantidad: {prod.cantidad}</p>
                </div>
            ))}

            {cart.length > 0 ? (
                <div className="finalizarpago__div">
                    <h2 className="precio__h2">Precio Total: ${precioTotal()}</h2>
                    <button className="btn__carrito" onClick={handleVaciar}>Vaciar</button>
                    <Link to="/checkout"><button className="btn__carrito">Finalizar compra </button> </Link>
                </div>
            ) : (
                <h2>El carrito está vacío :(</h2>
            )}
        </div>
    );
}

export default Cart;