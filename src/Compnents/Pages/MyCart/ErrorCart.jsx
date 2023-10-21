/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const ErrorCart = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-2xl text-red-500 font-bold">Opps!!! You Didn't Added Any Product In Add To Cart .Please Try Again</h1>
      <button className="btn btn-success mt-4"><Link to='/'>Go Home</Link></button>
    </div>
    );
};

export default ErrorCart;