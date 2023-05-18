import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blog from "../blogs/Blogs";
import ErrorPage from "../pages/404Page/ErrorPage";


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
                path:'addatoy',
                element:<AddAToy></AddAToy>
            },
            {
                path:'/blogs',
                element:<Blog></Blog>
            },
            

        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])


export default router