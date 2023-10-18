import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navBar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-300 cursor-pointer py-2 px-3 rounded-md text-black font-bold"
              : "bg-green-400 hover:bg-green-500 cursor-pointer py-2 px-3 rounded-md text-white font-bold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-300 cursor-pointer py-2 px-3 rounded-md text-black font-bold"
              : "bg-green-400 hover:bg-green-500 cursor-pointer py-2 px-3 rounded-md text-white font-bold"
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="mycart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-300 cursor-pointer py-2 px-3 rounded-md text-black font-bold"
              : "bg-green-400 hover:bg-green-500 cursor-pointer py-2 px-3 rounded-md text-white font-bold"
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-slate-100 shadow-lg flex flex-col md:flex-row gap-3 justify-between p-2 items-center">
      <div>
        <Link to="/">
          <p className=" uppercase text-3xl text-blue-500 font-bold">
            Brand SHOP
          </p>
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-between items-center gap-3">{navBar}</ul>
      </div>
      <div className="">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-green-300 cursor-pointer py-2 px-3 rounded-md text-black font-bold"
              : "bg-green-400 hover:bg-green-500 cursor-pointer py-2 px-3 rounded-md text-white font-bold"
          }
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
