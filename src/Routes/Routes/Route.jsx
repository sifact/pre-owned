import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
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
                path: "/addProduct",
                element: <AddProducts />,
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
]);

export default router;
