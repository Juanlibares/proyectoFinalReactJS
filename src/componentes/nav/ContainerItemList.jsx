import { Link } from 'react-router-dom';
import '../nav/NavbarStyle.css';

const ListProducts = ({ handleFilterClick }) => {
    return (
        <div className='productlist__div'>
            <Link to="/" className="btn__link">
                <button onClick={() => handleFilterClick('Todos')} className='btn__list'>
                    Home
                </button>
            </Link>
            <Link to="/category/Playstation5" className="btn__link">
                <button onClick={() => handleFilterClick("Playstation5")} className='btn__list'>
                    Playstation 5
                </button>
            </Link>
            <Link to="/category/Playstation4" className="btn__link">
                <button onClick={() => handleFilterClick("Playstation4")} className='btn__list'>
                    Playstation 4
                </button>
            </Link>
            <Link to="/category/Nintendo" className="btn__link">
                <button onClick={() => handleFilterClick("Nintendo")} className='btn__list'>
                    Nintendo Switch
                </button>
            </Link>
        </div>
    );
}

export default ListProducts;