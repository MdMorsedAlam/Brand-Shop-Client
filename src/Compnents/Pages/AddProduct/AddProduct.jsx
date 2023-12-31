import Swal from "sweetalert2";

const AddProduct = () => {
  const handelAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const type = form.type.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const des = form.description.value;
    const photo = form.photo.value;
    const intRating = parseInt(rating);

    const addData = { brand, type, name, price, rating, des, photo };

    if (intRating > 5) {
      Swal.fire({
        title: "Oppss!",
        text: "You Can't Give Rating Upto 5",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      if (brand === "Honda") {
        fetch("https://server-brand-shop.vercel.app/honda", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else if (brand === "Toyota") {
        fetch("https://server-brand-shop.vercel.app/toyota", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else if (brand === "Ford") {
        fetch("https://server-brand-shop.vercel.app/ford", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else if (brand === "Mercedes") {
        fetch("https://server-brand-shop.vercel.app/mercedes", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else if (brand === "BMW") {
        fetch("https://server-brand-shop.vercel.app/bmw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else if (brand === "Tesla") {
        fetch("https://server-brand-shop.vercel.app/tesla", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Good",
                text: "Successfully Add A Product",
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
      } else {
        Swal.fire({
          title: "Error!",
          text: "Select A Brand Name",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }

    form.reset();
  };
  return (
    <div className="lg:w-2/3 mx-auto bg-[#d4bf87] p-10 my-10">
      <h1 className=" text-green-500 text-center text-4xl font-bold">
        Add A Product
      </h1>
      <form className="mt-12" onSubmit={handelAdd}>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Brand Name</span>
            </label>
            <label className="input-group">
              <select name="brand" className="input input-bordered w-full">
                <option value="">Select Brand</option>
                <option>Toyota</option>
                <option>Ford</option>
                <option>BMW</option>
                <option>Mercedes</option>
                <option>Tesla</option>
                <option>Honda</option>
              </select>
            </label>
          </div>
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Product Type</span>
            </label>
            <label className="input-group">
              <select name="type" className="input input-bordered w-full">
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
              <span className="label-text font-bold text-lg">
                Short Description
              </span>
            </label>
            <label className="input-group">
              <textarea
                type="text"
                placeholder="Short Description"
                name="description"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="form-control w-full md:w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
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
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
