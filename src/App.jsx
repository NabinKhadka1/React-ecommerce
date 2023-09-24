import "./App.css";
import Home from "./components/Layouts/Home";
import About from "./components/Layouts/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SingleProduct from "./components/pages/SingleProduct";
import Layout from "./components/Layouts/Layout";
import Cart from "./components/pages/Cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details/:id",
        element: <SingleProduct />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
