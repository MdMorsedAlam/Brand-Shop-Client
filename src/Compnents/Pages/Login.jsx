import { Link } from "react-router-dom";
import {
    AiOutlineFacebook,
    AiFillGithub,
    AiFillGoogleCircle,
  } from "react-icons/ai";
import { useContext } from "react";
import { MyContext } from "../Provider/AuthProvider";


const Login = () => {
const {GoogleLogin}=useContext(MyContext)

    const handelFacebook=()=>{
        console.log("name")
    }
    const handelGoogle=()=>{
        GoogleLogin()
        .then(res=>{
            console.log(res.user)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    const handelGithub=()=>{
        console.log("Github")
    }

    const handelLogin=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.name.value;
        const pwd=form.pwd.value;
        console.log(email,pwd)


        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-2/3 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-lg">Email</span>
                </label>
                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                <span className="label-text font-bold text-lg">Password</span>
                </label>
                <input type="password" placeholder="Password" name="pwd" className="input input-bordered" required />
                <label className="label">
                <p className="label-text font-bold text-md mt-3">Create An New Account ? <Link className=" underline" to='/register'>Register</Link></p>
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
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;