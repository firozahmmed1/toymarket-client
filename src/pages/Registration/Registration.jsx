/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from 'sweetalert2'

const Registration = () => {
    const { signUpUser } = useContext(AuthContext)
    const navigate =useNavigate();

    const handleRegistrationForm = event => {
        event.preventDefault()
        const form = event.target;
        // eslint-disable-next-line no-unused-vars
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

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


        signUpUser(email, password)
            .then(result => {
                const signupUser = result.user;
                console.log(signupUser)
                Toast.fire({
                    icon: 'success',
                    title: 'Signed in successfully'
                });
                navigate('/login');
                form.reset();
            })
            .catch(error => {
                Toast.fire({
                    icon: 'error',
                    title: error.message
                })
            })
    }
    return (
        <>
            <h1 className="text-4xl font-bold text-center mt-8 text-gray-600">Registration Now!</h1>
            <div className="hero">
                <form onSubmit={handleRegistrationForm} className="hero-content lg:w-2/3 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/5TB27Cf/res-log.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" required placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="https://example.com" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent normal-case text-white">Sign Up</button>
                            </div>
                            <p className='text-center'><small>Already have an account?<span className='underline text-blue-600'><Link to="/login">Login</Link></span></small></p>

                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registration;