/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
const {logInUser, googleSignIn} = useContext(AuthContext)
const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from?.pathname || "/";
const handleLoginUser=event=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // eslint-disable-next-line no-unused-vars
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    logInUser(email, password)
    .then(result=>{
        Toast.fire({
            icon: 'success',
            title: 'Successfully Login'
        });
        navigate('/');
        form.reset();
    })
    .catch(error=>{
        Toast.fire({
            icon: 'error',
            title: error.message
        });
    })
}
const handleGoogle =()=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    googleSignIn()
    .then(()=>{
        Toast.fire({
            icon: 'success',
            title: 'Successfully Login with Google'
        });
        navigate(from, { replace: true });
      
    })
    .catch(()=>{})

}
    return (
        <>
         <h1 className="text-4xl font-bold text-center mt-8 text-gray-600">Login now!</h1>
            <div className="hero">
                <form onSubmit={handleLoginUser} className="hero-content lg:w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                       <img src="https://i.ibb.co/5TB27Cf/res-log.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary normal-case">Login</button>
                            </div>
                            <div className="form-control mt-1">
                                <button onClick={handleGoogle} className="btn btn-outline btn-accent normal-case"><span className='mr-1'><FaGoogle></FaGoogle></span> Login with Google</button>
                            </div>
                           
                            <p className='text-center'><small>No account yet? <span className='underline text-blue-600'><Link to="/registration">Sign up</Link></span></small></p>
                
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;