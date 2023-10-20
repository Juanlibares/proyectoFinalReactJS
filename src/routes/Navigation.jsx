import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import Category from "../pages/Category/Category";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/ItemDetails/:id",
      element: <ItemDetailContainer />,
    },

    {

      path: "/category/:categoryName",
      element: <Category />,
    },

    {

      path: "/cart",
      element: <Cart/>,
    },

    {
    path: "/checkout",
    element: <Checkout />,
  },

  ]);

  return <RouterProvider router={router} />;
};

export default Navigation;