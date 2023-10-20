import ItemListContainer from '../../componentes/ItemListContainer/ItemListContainer';
import Navbar from '../../componentes/nav/Navbar';
import Portada from '../../componentes/home/Portada';


const Home = () => {
    return (
        <>
            <Navbar />
            <Portada />
            <ItemListContainer />
        </>
    );
};

export default Home;