import {createBrowserRouter} from "react-router";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import MyBooking from "../Pages/MyBooking";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import LawyerDetails from "../Pages/LawyerDetails";
import ErrorPage from "../Pages/ErrorPage";
import NotFoundLawyer from "../Components/NotFoundLawyer";

const router = createBrowserRouter([
    {
        path:'/',
        Component:Layout,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                loader:()=>fetch('/LawyerData.json'),
                Component:Home           
            },
            {
                path:'/booking',
                Component:MyBooking
            },
            {
                path:'/blogs',
                loader:()=> fetch('/Blog.json'),
                Component:Blogs
            },
            {
                path:'contact',
                element:<ErrorPage/>
            },
            {
                path:'/details/:lawyerId',
                loader:()=>fetch('/LawyerData.json'),
                errorElement:<NotFoundLawyer/>,
                Component:LawyerDetails
            },
        ]
    }
])

export default router;