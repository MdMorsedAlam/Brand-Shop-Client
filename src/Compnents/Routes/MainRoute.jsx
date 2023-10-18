import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import PropTypes from 'prop-types'
import Home from "../Pages/Home/Home";
const MainRoute = ({children}) => {


    const router=createBrowserRouter([
        {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
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