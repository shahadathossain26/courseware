import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";

import Blog from "../../Pages/Blog/Blog";
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



export const routes = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [
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
                        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
                    },
                    {
                        path: `/courses/:id/details`,
                        element: <CourseDetails></CourseDetails>,
                        loader: (params) => fetch(`http://localhost:5000/courses/${params.id}/details`)
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