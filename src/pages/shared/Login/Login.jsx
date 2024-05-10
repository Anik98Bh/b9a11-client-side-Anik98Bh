import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        // signIn(email, password)
        // .then(result => {
        //     console.log(result.user)

        //     navigate(location?.state ? location.state : "/")
        //     if(result.user){
        //         Swal.fire({
        //             position: "top-end",
        //             icon: "success",
        //             title: "Login has been successfully",
        //             showConfirmButton: false,
        //             timer: 1500
        //           });
        //     }

        // })
        // .catch(error => {
        //     console.error(error)
        // })
    }

    const handleGoogleLogin = () => {
        // googleLogin()
        //     .then(result => {
        //         console.log(result.user)
        //         navigate(location?.state ? location.state : "/")
        //         if(result.user){
        //             Swal.fire({
        //                 position: "top-end",
        //                 icon: "success",
        //                 title: "Login has been successfully",
        //                 showConfirmButton: false,
        //                 timer: 1500
        //               });
        //         }
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-6">
                    <img className="rounded-xl" src="https://i.postimg.cc/xdhkkMdf/3d-hand-hold-smartphone-with-authentication-form.jpg" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div className="mt-4">
                            <p className="mt-6 text-xl font-bold text-center">----------------- OR ---------------</p>
                            <div className="flex justify-evenly mt-4">
                                <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary text-white"><FaGoogle className="text-xl"></FaGoogle> Continue with Google</button>
                            </div>
                        </div>
                    </form>
                    <p className="my-4 text-center">New to Here ! <Link className="text-orange-600 font-bold" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;