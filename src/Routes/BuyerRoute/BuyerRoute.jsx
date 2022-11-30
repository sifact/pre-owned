import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useBuyer from "../../Pages/Hooks/useBuyer";

const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    console.log(isBuyer);

    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <progress className="progress w-56"></progress>;
    }
    if (user && isBuyer) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
