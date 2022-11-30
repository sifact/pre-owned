import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Blog from "../../Pages/Blog/Blog";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Sellers from "../../Pages/Dashboard/Sellers/Sellers";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import NotFound from "../../Pages/NotFound/NotFound";
import ProductsDetails from "../../Pages/ProductsDetails/ProductsDetails";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";

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
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "*",
                element: <NotFound />,
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
                path: "/dashboard/seller",
                element: (
                    <AdminRoute>
                        <Sellers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/buyers",
                element: (
                    <AdminRoute>
                        <Buyers />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/addProduct",
                element: (
                    <SellerRoute>
                        <AddProducts />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/addedProducts",
                element: (
                    <SellerRoute>
                        <MyProducts />
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/orders",
                element: <MyOrders />,
            },

            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
