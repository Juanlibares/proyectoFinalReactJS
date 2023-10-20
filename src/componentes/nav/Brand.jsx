import { Link } from "react-router-dom";
import brand from "../../assets/logo.ico";


const Brand = () => {
  return (
    <Link to={'/'} >
      <img className="brand__img" src={brand} alt="logo dementesgamers" title="Tienda de Videojuegos" />
    </Link>
  )
}



export default Brand;