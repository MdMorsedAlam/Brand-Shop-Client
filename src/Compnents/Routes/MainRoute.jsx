import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PropTypes from 'prop-types'
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import BrandProduct from "../Pages/BrandProduct";
const MainRoute = ({children}) => {


    const router=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            errorElement:<Error></Error>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>,
                    loader:()=>fetch('/brands.json')
                },
                {
                    path:'addproduct',
                    element:<PrivateRoute><AddProduct/></PrivateRoute>
                },
                {
                    path:'/mycart',
                    element:<PrivateRoute><MyCart/></PrivateRoute>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/showbranditem',
                    element:<BrandProduct></BrandProduct>
                }
            ]
        }
    ])
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    );
};
MainRoute.propTypes={
    children:PropTypes.node,
}
export default MainRoute;