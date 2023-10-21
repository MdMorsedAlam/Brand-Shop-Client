import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const DetailsProduct = () => {
    const loaderData=useLoaderData()

    const handelAddToCart=()=>{
        const brand=loaderData.brand;
        const name=loaderData.name;
        const price=loaderData.price;
        const photo=loaderData.photo;
        const cartData={brand,name,price,photo}
        fetch("https://server-brand-shop.vercel.app/mycart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully Add To Cart This Item",
                showConfirmButton: false,
                timer: 1500,
              });
          }
        });
    }
    return (
        <div className="card w-2/3 mx-auto my-10 bg-base-100 shadow-xl">
  <figure><img src={loaderData.photo} alt={loaderData.photo} /></figure>
  <div className="card-body">
    <h2 className="card-title">Brand : {loaderData.brand}</h2>
    <h2 className="card-title">Name : {loaderData.name}</h2>
    <p> <span className="text-lg font-semibold">Price :</span> {loaderData.price} <span className="text-lg font-semibold">Taka</span></p>
    <p className="text-[#797474] italic">{loaderData.des}</p>
    <div className="card-actions justify-end">
      <button onClick={handelAddToCart} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default DetailsProduct;