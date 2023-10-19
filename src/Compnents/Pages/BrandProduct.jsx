import { Link, useLoaderData } from "react-router-dom";
import ErrorProduct from "./AddProduct/ErrorProduct";

const BrandProduct = () => {
  const loaderData = useLoaderData();
  // const [brandItem, setBrandItem] = useState(loaderData);
//   const location = useLocation();
  // console.log(loaderData);
  // console.log(location.state)
  if(loaderData.length>0){
    return (
        <div className="grid grid-cols-2 gap-10 my-10">
          {loaderData?.map((item) =><div key={item._id} className="card bg-base-100 shadow-xl">
  <figure><img src={item.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
    </h2>
    <p>Price : {item.price}</p>
    <p>{item.des}</p>
    <div className="card-actions justify-end">
    <Link to={`/detailsproduct/${item.brand.toLowerCase()}/${item._id}`} className="btn btn-outline btn-info">Details</Link>
<Link to={`/updateproduct/${item.brand.toLowerCase()}/${item._id}`} className="btn btn-outline btn-success">Update</Link>
    </div>
  </div>
</div>)}
          
        </div>
      );
  }else{
    return <ErrorProduct></ErrorProduct>
  }
  
};

export default BrandProduct;
