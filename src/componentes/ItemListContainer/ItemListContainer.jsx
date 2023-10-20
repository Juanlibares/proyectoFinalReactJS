import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Ring } from '@uiball/loaders';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../db/db';

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRef = collection(db, "productos");
                const response = await getDocs(productsRef);
                const productsData = response.docs.map((productDoc) => ({
                    id: productDoc.id,
                    ...productDoc.data()
                }));

                const filteredProducts = categoryName
                    ? productsData.filter(producto => producto.category === categoryName)
                    : productsData;

                setProductos(filteredProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar productos:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName]);

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <Ring color="#007bff" size={64} />
                    <span>Cargando . . .</span>
                </div>
            ) : (
                <div>
                    <div className="itemlist__div">
                        {productos.length > 0 ? (
                            <ItemList productos={productos} />
                        ) : (
                            <p>No se encontraron productos.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;