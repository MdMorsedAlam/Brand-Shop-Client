import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";

const Register = () => {
  const { createUser, logOut } = useContext(MyContext);
  const navigate = useNavigate();
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const pwd = form.pwd.value;
    if (!
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(
        pwd
      )
    ) {
      Swal.fire({
        title: "Opps!!",
        text: "Password Must Be 6 Characters ,Capital Letter Small Letter And Spacial Character ",
        icon: "error",
        confirmButtonText: "Try Again",
      })
    } else {
      createUser(email, pwd)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: "",
              })
                .then()
                .catch();
          Swal.fire({
            title: "Good",
            text: "Register Success . Please Login",
            icon: "success",
            confirmButtonText: "Cool",
          });
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch(() => {});
        })
        .catch(() => {
          Swal.fire({
            title: "Error!",
            text: "Something Went Wrong",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }

    form.reset();
  };
  return (
    <div className="hero my-10 min-h-screen bg-base-200 md:w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Give Your Some Information To Register An Account .Keep Connect With Us.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-lg">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-lg">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="pwd"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p className="label-text font-bold text-md mt-3">
                  Already Have An Account ?{" "}
                  <Link className=" underline" to="/login">
                    Login
                  </Link>
                </p>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
