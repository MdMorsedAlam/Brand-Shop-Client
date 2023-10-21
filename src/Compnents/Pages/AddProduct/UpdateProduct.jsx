import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const loaderData = useLoaderData();
  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const type = form.type.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const intRating = parseInt(rating);
    const updateData = { brand,type, name, price, rating, photo };
    if (intRating > 5) {
      Swal.fire({
        title: "Oppss!",
        text: "You Can't Give Rating Upto 5",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      fetch(
        `https://server-brand-shop.vercel.app/${loaderData.brand.toLowerCase()}/${
          loaderData._id
        }`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateData),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            Swal.fire({
              title: "Success!",
              text: "Updated Data Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
          } else {
            Swal.fire({
              title: "Oppss!",
              text: "Something Went Wrong",
              icon: "error",
              confirmButtonText: "Ok",
            });
          }
        });
    }
  };
  return (
    <div className="lg:w-2/3 mx-auto bg-[#d4bf87] p-10 my-10">
      <h1 className=" text-green-500 text-center text-4xl font-bold">
        Update This Product
      </h1>
      <form className="mt-12" onSubmit={handelUpdate}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Brand Name</span>
            </label>
            <label className="input-group">
              <select name="brand" className="input input-bordered w-full">
                <option value={loaderData.brand}>{loaderData.brand}</option>
              </select>
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Product Type</span>
            </label>
            <label className="input-group">
              <select name="type" className="input input-bordered w-full">
                
                <option>{loaderData.type}</option>
                <option>Cars</option>
                <option>Trucks</option>
                <option>Vans</option>
                <option>Sedan</option>
              </select>
            </label>
          </div>
         
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Name</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={loaderData.name}
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Price</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={loaderData.price}
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Rating</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={loaderData.rating}
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                defaultValue={loaderData.photo}
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <input
          className="btn btn-block mt-5"
          type="submit"
          value="Update Product"
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
