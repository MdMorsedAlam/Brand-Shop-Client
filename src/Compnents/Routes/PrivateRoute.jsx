import { useContext } from "react";
import { MyContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user } = useContext(MyContext);
    const location=useLocation()


    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"  />
};
PrivateRoute.propTypes={
    children:PropTypes.node,
}
export default PrivateRoute;