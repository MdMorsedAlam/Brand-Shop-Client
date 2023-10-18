import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PropTypes from 'prop-types'
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const MainRoute = ({children}) => {


    const router=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            errorElement:<Error></Error>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'addproduct',
                    element:<AddProduct/>
                },
                {
                    path:'/mycart',
                    element:<MyCart/>
                },
                {
                    path:'/register',
                    element:<Register/>
                },
                {
                    path:'/login',
                    element:<Login></Login>
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