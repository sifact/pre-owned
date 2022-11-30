import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider/AuthProvider";
import Buyers from "../Pages/Dashboard/Buyers/Buyers";
import useAdmin from "../Pages/Hooks/useAdmin";
import useBuyer from "../Pages/Hooks/useBuyer";
import useSeller from "../Pages/Hooks/useSeller";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer drawer-mobile">
                <input
                    id="dashboardDrawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    <Outlet />
                    {/* <label
                        htmlFor="dashboardDrawer"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label> */}
                </div>
                <div className="drawer-side ">
                    <label
                        htmlFor="dashboardDrawer"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 bg-info text-base-content">
                        {isAdmin && (
                            <>
                                <li>
                                    <Link to="/dashboard/seller">Sellers</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/buyers">Buyers</Link>
                                </li>
                            </>
                        )}

                        {isSeller && (
                            <>
                                <li>
                                    <Link to="/dashboard/addedProducts">
                                        My products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/addProduct">
                                        Add Products
                                    </Link>
                                </li>
                            </>
                        )}

                        {isBuyer && (
                            <li>
                                <Link to="/dashboard/orders">My Orders</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
