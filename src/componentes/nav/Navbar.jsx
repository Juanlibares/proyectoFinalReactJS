import './NavbarStyle.css';
import Brand from "./Brand";
import CartWiget from "./CartWiget";
import ContainerItemList from "./ContainerItemList";



function Navbar() {
  return (
    <header>

      <div className='containerBrand'>
        <Brand />

      </div>

      <nav className='containerItemList'>
        <ContainerItemList />

      </nav>

      <div className='containerCart'>
        <CartWiget />


      </div>

    </header>
  );
}

export default Navbar;