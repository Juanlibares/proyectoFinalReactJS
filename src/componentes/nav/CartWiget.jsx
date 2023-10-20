import { AiOutlineShoppingCart } from 'react-icons/ai';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    const cantidad = cantidadEnCarrito();

    return (
        <Link to="/cart">
            <div className='cartwiger__div'>
                <AiOutlineShoppingCart className='cartwiget__img' />
                <span className='cartwiget__cantcart'>{cantidad}</span>
            </div>
        </Link>
    );
};

export default CartWidget;