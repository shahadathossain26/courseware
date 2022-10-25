import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Contactus from "../../Pages/Contact Us/Contactus";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";


import Python from "../../Pages/Python/Python";
import Register from "../../Pages/Register/Register";
import Support from "../../Pages/Support/Support";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [

                ]
            },
            {
                path: '/support',
                element: <Support></Support>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contactus',
                element: <Contactus></Contactus>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])