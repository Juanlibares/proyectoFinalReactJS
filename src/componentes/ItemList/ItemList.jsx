import Item from '../Item/Item';
import '../Item/Item.css';

const ItemList = ({ productos }) => {
    return (

        <div className="itemlist__div">

            {productos.map((prod) => (
                    <Item key={prod.id} producto={prod} />
                ))}
        </div>
    );
};

export default ItemList;


