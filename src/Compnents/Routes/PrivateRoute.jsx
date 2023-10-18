import { useContext } from "react";
import { MyContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoute = ({children}) => {
    const { user,loading } = useContext(MyContext);
    const location=useLocation()

    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"  />
};
PrivateRoute.propTypes={
    children:PropTypes.node,
}
export default PrivateRoute;