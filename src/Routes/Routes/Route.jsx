import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import ProductsDetails from "../../Pages/ProductsDetails/ProductsDetails";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:id",
                element: (
                    <PrivateRoute>
                        <ProductsDetails />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/category/${params.id}`),
            },

            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout>
                    <Dashboard />
                </DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Sellers />,
            },
            {
                path: "/dashboard/buyers",
                element: <Buyers />,
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProducts />,
            },
            {
                path: "/dashboard/orders",
                element: <MyOrders />,
            },
            {
                path: "/dashboard/addedProducts",
                element: <MyProducts />,
            },
        ],
    },
]);

export default router;
