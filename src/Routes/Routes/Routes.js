import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Contactus from "../../Pages/Contact Us/Contactus";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";


import Home from "../../Pages/Home/Home";




import Login from "../../Pages/Login/Login";
// import PHP from "../../Pages/PHP/PHP";
// import Python from "../../Pages/Python/Python";
// import Swift from "../../Pages/Swift/Swift";
// import Java from "../../Pages/Java/Java";
// import Laravel from "../../Pages/Laravel/Laravel";
// import CSharp from "../../Pages/CSharp/CSharp";

import Register from "../../Pages/Register/Register";
import Support from "../../Pages/Support/Support";
import PrivateRoute from "./PrivateRoute";



export const routes = createBrowserRouter([
    {
        path: '*',
        element: <h1>Sorry!!! Your content is not found</h1>
    },

    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '*',
                element: <p>Sorry!!! Your content is not found</p>
            },
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [

                    {
                        path: `/courses/:id`,
                        element: <Course></Course>,
                        loader: ({ params }) => fetch(`https://courseware-server.vercel.app/courses/${params.id}`)
                    },
                    {
                        path: `/courses/:id/details`,
                        element: <CourseDetails></CourseDetails>,
                        loader: ({ params }) => fetch(`https://courseware-server.vercel.app/courses/${params.id}/details`)
                    },
                    {
                        path: `/courses/:id/checkout`,
                        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://courseware-server.vercel.app/courses/${params.id}/checkout`)
                    }
                    // {
                    //     path: '/courses/swift',
                    //     element: <Swift></Swift>
                    // },
                    // {
                    //     path: '/courses/python',
                    //     element: <Python></Python>
                    // },
                    // {
                    //     path: '/courses/php',
                    //     element: <PHP></PHP>
                    // },
                    // {
                    //     path: '/courses/laravel',
                    //     element: <Laravel></Laravel>
                    // },
                    // {
                    //     path: '/courses/java',
                    //     element: <Java></Java>
                    // },
                    // {
                    //     path: '/courses/csharp',
                    //     element: <CSharp></CSharp>
                    // }
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
            },


        ]
    }

])