import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiFillGithub,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, googleLogin,facebookLogin,githubLogin } = useContext(MyContext);
  const location = useLocation();

  const handelFacebook = () => {
    facebookLogin()
    .then(() => {
        Swal.fire({
          title: "Good",
          text: "Successfully Login With Facebook",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });

  };
  const handelGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Good",
          text: "Successfully Login With Google",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  const handelGithub = () => {
    githubLogin()
    .then(() => {
        Swal.fire({
          title: "Good",
          text: "Successfully Login With Github",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pwd = form.pwd.value;
    console.log(email, pwd);
    loginUser(email, pwd)
      .then(() => {
        Swal.fire({
          title: "Good",
          text: "Successfully Login With Email And Password",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something Went Wrong",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });

    form.reset();
  };
  return (
    <div className="hero min-h-screen bg-base-200 w-2/3 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Keep Connect With Us.Give Your Email And Password To Login Your Account.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
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
                  Create An New Account ?{" "}
                  <Link className=" underline" to="/register">
                    Register
                  </Link>
                </p>
              </label>
            </div>
            <div>
              <div className="flex justify-center items-center gap-3">
                <hr className="w-[50%] h-1 bg-blue-500" />
                <p>OR</p>
                <hr className="w-[50%] h-1 bg-green-500" />
              </div>
              <div className="flex justify-center gap-6 items-center mt-5">
                <AiOutlineFacebook
                  onClick={handelFacebook}
                  className="text-4xl text-blue-500 cursor-pointer"
                ></AiOutlineFacebook>
                <AiFillGoogleCircle
                  onClick={handelGoogle}
                  className="text-4xl text-red-500 cursor-pointer"
                ></AiFillGoogleCircle>
                <AiFillGithub
                  onClick={handelGithub}
                  className="text-4xl cursor-pointer"
                ></AiFillGithub>
              </div>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
