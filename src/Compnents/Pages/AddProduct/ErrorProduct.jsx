import { Link } from "react-router-dom";

const ErrorProduct = () => {
    return (
        <div className="h-[100vh] flex flex-col justify-center items-center">
        <h1 className="md:text-5xl text-2xl text-red-500 font-bold">Opps!!! Product Not Found .Please Add Product First</h1>
        <button className="btn btn-success mt-4"><Link to='/'>Go Home</Link></button>
      </div>
    );
};

export default ErrorProduct;