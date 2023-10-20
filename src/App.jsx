import Navigation from './routes/Navigation';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <>
    <CartProvider>

      <Navigation />

      </CartProvider>
    </>
  );
}

export default App;