import { useLoaderData } from "react-router-dom";

const DetailsProduct = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)

    const handelAddToCart=()=>{
        const brand=loaderData.brand;
        const name=loaderData.name;
        const price=loaderData.price;
        const photo=loaderData.photo;
        const cartData={brand,name,price,photo}
        console.log(cartData)
        fetch("http://localhost:6868/mycart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Product Added");
          }
        });
    }
    return (
        <div className="card w-2/3 mx-auto my-10 bg-base-100 shadow-xl">
  <figure><img src={loaderData.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{loaderData.brand}</h2>
    <h2 className="card-title">{loaderData.name}</h2>
    <p>{loaderData.price}</p>
    <p>{loaderData.des}</p>
    <div className="card-actions justify-end">
      <button onClick={handelAddToCart} className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default DetailsProduct;