import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllByers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportToAdmin from "../../Pages/Dashboard/ReportToAdmin/ReportToAdmin";
import FourOFourRoute from "../../Pages/FourOFourRoute/FourOFourRoute";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/LoginAndRegister/Login/Login";
import Register from "../../Pages/LoginAndRegister/Register/Register";
import SpecificCategory from "../../Pages/SpecificCategory/SpecificCategory";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myorders',
                element:<BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params})=>fetch(`http://localhost:5000/bookings/${params.id}`),
                element: <BuyerRoute><Payment></Payment></BuyerRoute>
            },
            {
                path:'/dashboard/myproduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
            {
                path:'/dashboard/reporteditems',
                element: <AdminRoute><ReportToAdmin/></AdminRoute>
            }
        ]
    },
    {
        path:'*',
        element: <FourOFourRoute></FourOFourRoute>
    }
])