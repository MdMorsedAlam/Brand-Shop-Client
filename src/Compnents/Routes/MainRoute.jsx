import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PropTypes from "prop-types";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import BrandProduct from "../Pages/BrandProduct";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct";
import DetailsProduct from "../Pages/AddProduct/DetailsProduct";
import ErrorProduct from "../Pages/AddProduct/ErrorProduct";
import ErrorCart from "../Pages/MyCart/ErrorCart";
const MainRoute = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("/brands.json"),
        },
        {
          path: "addproduct",
          element: (
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          ),
        },
        {
          path: "/mycart",
          element: (
            <PrivateRoute>
              <MyCart />
            </PrivateRoute>
          ),
          errorElement:<ErrorCart></ErrorCart>,
          loader:()=>fetch("https://server-brand-shop.vercel.app/mycart")
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/showbranditem/:brand",
          element: <BrandProduct></BrandProduct>,
          errorElement:<ErrorProduct/>,
          loader: ({ params }) =>
            fetch(`https://server-brand-shop.vercel.app/${params.brand}`),
        },
        {
          path: "/updateproduct/:brand/:id",
          element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
          loader: ({ params }) =>
            fetch(`https://server-brand-shop.vercel.app/${params.brand}/${params.id}`),
        },
        {
            path:"/detailsproduct/:brand/:id",
            element:<PrivateRoute><DetailsProduct/></PrivateRoute>,
            loader: ({ params }) =>
            fetch(`https://server-brand-shop.vercel.app/${params.brand}/${params.id}`),
        }
      ],
    },
  ]);
  return <RouterProvider router={router}>{children}</RouterProvider>;
};
MainRoute.propTypes = {
  children: PropTypes.node,
};
export default MainRoute;
