import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center font-bold mb-5">Features Brands</h1>
      <div className="grid grid-cols-3 gap-5">
        {brands.map((brand) => (
          <Link key={brand.id} to={`/showbranditem/${brand.url}`}>
            <div className="card bg-slate-100 shadow-xl">
              <img className="w-full" src={brand.img} alt={brand.img} />

              <div className="card-body">
                <h2 className="card-title">{brand.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
Brands.propTypes = {
  brands: PropTypes.array,
};
export default Brands;
