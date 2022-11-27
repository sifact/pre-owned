import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
// import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
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
                        <li>
                            <Link to="/dashboard">Sellers</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/buyers">Buyers</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addedProducts">
                                My products
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/orders">My Orders</Link>
                        </li>
                        <li>
                            <Link to="/dashboard/addProduct">Add Products</Link>
                        </li>
                        {/* <li>
                <Link to="/orders">My Orders</Link>
            </li>
            <li>
                <Link to="/addedProducts">My Products</Link>
            </li> */}

                        {/* <li>
                <Link to="/addProduct">Add Products</Link>
            </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
