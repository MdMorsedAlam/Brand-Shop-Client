import { useLocation } from "react-router-dom";


const BrandProduct = () => {
    const location=useLocation()
    console.log(location.state)
    return (
        <div>
            <h1>This Is Brand</h1>
        </div>
    );
};

export default BrandProduct;