import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

import useSeller from "../../Pages/Hooks/useSeller";

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [isSeller, isSellerLoading] = useSeller(user?.email);
    console.log(isSeller);

    const location = useLocation();

    if (loading || isSellerLoading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user && isSeller) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
