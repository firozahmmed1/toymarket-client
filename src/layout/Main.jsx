import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;