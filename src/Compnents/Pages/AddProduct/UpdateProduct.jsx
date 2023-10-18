
const UpdateProduct = () => {
    const handelUpdate = (e) => {
        e.preventDefault();
        const form=e.target;
        const brand=form.brand.value;
        const name=form.name.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const des=form.description.value;
        const photo=form.photo.value;
        const addData={brand,name,price,rating,des,photo}
        console.log(addData)
    }
    return (
        <div className="w-2/3 mx-auto bg-[#d4bf87] p-10">
      <h1 className=" text-green-500 text-center text-4xl font-bold">
        Add A Product
      </h1>
      <form className="mt-12" onSubmit={handelUpdate}>
        <div className="flex justify-between gap-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Brand Name</span>
            </label>
            <label className="input-group">
            <select name="brand" className="input input-bordered w-full">
  <option value=''>Select Brand</option>
  <option value="otherOption">Other option</option>
</select>
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">
                Name
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">
              Price
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between gap-5 mt-5">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold text-lg">Short Description</span>
            </label>
            <label className="input-group">
              <textarea type="text"
                placeholder="Short Description"
                name="description"
                className="input input-bordered w-full"/>
            </label>
          </div>
          <div className="form-control w-1/2">
          <label className="label">
            <span className="label-text font-bold text-lg">Photo URL</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full"
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