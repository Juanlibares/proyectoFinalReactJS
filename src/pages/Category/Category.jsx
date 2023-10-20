import { useParams } from "react-router-dom";
import Navbar from "../../componentes/nav/Navbar";
import './CategoryStyle.css';
import ItemListContainer from "../../componentes/ItemListContainer/ItemListContainer";

const Category = () => {
    const { categoryName } = useParams();

    return (
        <div>
            <Navbar />
            <div className="category">
                <h2 className="category__title">{categoryName}</h2>
                <span className="category__span">{categoryName}</span>
            </div>
            <ItemListContainer categoryName={categoryName} />
        </div>
    );
}

export default Category;