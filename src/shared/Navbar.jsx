import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [hover, setHover] = useState(true);
    const navItem = <>
        <Link className="md:mr-4 md:font-semibold " to="/">Home</Link>
        <Link className="md:mr-4 md:font-semibold " to="/alltoys">All Toys</Link>
       {user && <Link className="md:mr-4 md:font-semibold " to="/mytoys">My Toys</Link>}
       {user && <Link className="md:mr-4 md:font-semibold " to="/addatoy">Add A Toy</Link>}
        <Link className="md:mr-4 md:font-semibold " to="/blogs">Blogs</Link>
    </>
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Successfully Logout',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch()

    }
    const handlePicHover =(hover)=>{
          setHover(hover)
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}

                    </ul>
                </div>
                <Link>
                    <div className=" flex items-center">
                        <img className="w-16 rounded" src="https://i.ibb.co/F6XJLvJ/logo-removebg-preview.png" />
                        <span className="font-bold w-40 md:text-2xl bg-clip-text text-transparent italic bg-gradient-to-r to-purple-700 via-yellow-700  from-orange-500 ">Toys Garden</span>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}

                </ul>
            </div>
            <div className="navbar-end">
                {!user ? <Link className="md:mr-4 md:font-semibold" to="/login">Login</Link>
                    : <div className="flex items-center justify-center">
                        <div className="avatar relative">
                            <div className="w-9 mr-2 rounded-full cursor-pointer">
                               {user.photoURL && <img onMouseEnter={()=>handlePicHover(false)} onMouseLeave={()=>handlePicHover(true)} src={user.photoURL} /> }
                            </div>
                            <p hidden={hover} className="absolute w-[200px] bottom-[-20px]">{user.displayName}</p>
                        </div>
                        <Link onClick={handleLogOut} className="md:mr-4 md:font-semibold">Logout</Link>
                    </div>
                };

            </div>
        </div>
    );
};

export default Navbar;