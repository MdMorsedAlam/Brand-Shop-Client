import { Link } from "react-router-dom";


const Register = () => {

    const handelRegister=e=>{
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
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelRegister} className="card-body">
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
          <p className="label-text font-bold text-md mt-3">Already Have An Account ? <Link className=" underline" to='/login'>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;