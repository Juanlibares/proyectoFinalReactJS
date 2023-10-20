import { Link } from 'react-router-dom';
import './Item.css';

const Card = ({ producto }) => {
    const page = `/ItemDetails/${producto.id}`;

    return (
        <div className="card" key={producto.id}>
            <img className="card__img" src={producto.imagen} alt={producto.titulo} />
            <h2 className='card__h2'>{producto.titulo}</h2>
            <Link to={page}>
                <button>Ver detalles</button>
            </Link>
            <span className='card__price'>${producto.price}</span>
        </div>
    );
}

export default Card;
