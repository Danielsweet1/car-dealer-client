import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";
import SpecificCategory from "../../Pages/SpecificCategory/SpecificCategory";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:brand',
                loader: ({params})=>fetch(`http://localhost:5000/category/${params.brand}`),
                element: <PrivateRoute><SpecificCategory></SpecificCategory></PrivateRoute>
            }
        ]
    }
])