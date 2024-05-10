import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import 'animate.css';

const Register = () => {
    const { createUser } = useAuth();
    const [success, setSuccess] = useState('');
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);

        setSuccess('');
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should be at least 1 UpperCase characters');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created User', user);
                navigate(location?.state ? location.state : "/")
                if (setSuccess) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Register has been successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.error(error);
                setRegisterError('Please Give Correct Information', error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 lg:h-[608px] mr-6 animate__animated animate__fadeInLeft">
                    <img className="rounded-xl" src="https://i.postimg.cc/xdhkkMdf/3d-hand-hold-smartphone-with-authentication-form.jpg" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border-2 bg-base-100 animate__animated animate__fadeInRight">
                    <h1 className="text-3xl text-center font-bold mt-2">Register Now</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered" required />
                            <span className="absolute top-12 left-3/4 ml-12 text-xl" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-accent font-bold" type="submit" value="Register" />
                        </div>
                    </form>
                    {
                        registerError && <p className="text-red-700 font-bold text-center mt-2">{registerError}</p>
                    }
                    {
                        success && <p className="text-green-700 font-bold text-center mt-2">{success}</p>
                    }
                    <p className="my-4 text-center">Have an account? <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;