import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../blogs/Blogs";
import ErrorPage from "../pages/404Page/ErrorPage";
import Login from "../pages/login/Login";
import Registration from "../pages/Registration/Registration";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./private/PrivateRoute";
import Update from "../pages/Update/Update";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
                
            },
            {
                path:'alltoys',
                element:<AllToys></AllToys>
            },
            {
                path:'mytoys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'addatoy',
                element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            },
            {
                path:'/viewdetails',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>
            },
            {
                path:'/update',
                element:<Update></Update>
            }
            

        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])


export default router