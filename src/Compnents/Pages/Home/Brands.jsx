import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
  return (
    <div>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/VS88hZR/S-Class-S-450.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">Welcome To Our <span className="text-green-400">Brand Shop</span></h1>
            <p className="mb-5 text-lg">
              You Can Buy Anything From Our Brand Shop.choose A Brand Name And Buy What You Want..Thanks
            </p>
            <Link to='/addproduct' className="btn hover:bg-green-300 hover:text-black bg-green-500 border-none text-white">Add Product</Link>
          </div>
        </div>
      </div>
      <div className="my-16">
        <h1 className="text-4xl text-center font-bold mb-10">
          Features Brands
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.map((brand) => (
            <Link key={brand.id} to={`/showbranditem/${brand.url}`}>
              <div className="card bg-slate-100 shadow-xl">
                <div className="w-full h-[200px]">
                  <img
                    className="w-full h-full"
                    src={brand.img}
                    alt={brand.img}
                  />
                </div>

                <div className="card-body">
                  <h2 className="card-title">{brand.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.array,
};
export default Brands;
