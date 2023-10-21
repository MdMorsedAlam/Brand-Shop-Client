import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(MyContext);
  const [light,setLight]=useState(true)
  const handelDark=()=>{
    setLight(!light)
    document.querySelector("body").setAttribute("data-theme","dark")
  }
  const handelLight=()=>{
    setLight(true)
    document.querySelector("body").setAttribute("data-theme","light")
  }

  const navigate = useNavigate();

  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Logout",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      })
      .catch();
  };
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
          Automotive SHOP
          </p>
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-between items-center gap-3">{navBar}</ul>
      </div>
      <div className="flex justify-center items-center gap-4">
       <div>
       {user ? (
          <div className="dropdown dropdown-end">
            {" "}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL ? user.photoURL : "/avatar.png"} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="justify-between">
                  {user.displayName ? user.displayName : user.email}
                </p>
              </li>
              <li>
                <Link to="editprofile">Edit Profile</Link>
              </li>
              <li onClick={handelLogout}>
                <p>Logout</p>
              </li>
            </ul>
          </div>
        ) : (
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
        )}

       </div>

        <div>
          {
            light?<p className=" cursor-pointer font-bold" onClick={handelDark}>Dark</p>:<p className=" cursor-pointer font-bold" onClick={handelLight}>Light</p>
          }
          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
