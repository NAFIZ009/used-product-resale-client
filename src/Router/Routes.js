import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Shop from "../Pages/Shop/Shop";
import Signup from "../Pages/SignUP/Signup";
import PrivetRoute from "./Privetroute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/shop',
                element:<PrivetRoute><Shop></Shop></PrivetRoute>,
            },
        ]
    },
    
]);
export default router;