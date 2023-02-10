import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((e) => console.log(e));
    };

    const menuItems = (
        <React.Fragment>
            <li>
                <Link to="/">Home</Link>
            </li>

            {/* <li>
                <Link to="/orders">My Orders</Link>
            </li>
            <li>
                <Link to="/addedProducts">My Products</Link>
            </li> */}

            <li>
                <Link to="/blog">Blog</Link>
            </li>

            {user?.uid ? (
                <>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        {" "}
                        <button>{`Hi ${user?.displayName}`}</button>
                    </li>

                    <li>
                        <button onClick={handleLogout}>Sign out</button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <Link
                        className=" bg-primary py-2 px-4 rounded-sm text-white"
                        to="/register"
                    >
                        Sign up
                    </Link>
                </>
            )}

            <li></li>
        </React.Fragment>
    );

    return (
        <section className="bg-base-200 py-2">
            <div className=" flex">
                <div className="navbar p-0 m-0 container mx-auto">
                    <div className="navbar-start ">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={1}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {menuItems}
                            </ul>
                        </div>
                        <Link
                            to="/"
                            className="btn p-0 btn-ghost normal-case text-xl font-bold text-primary"
                        >
                            Pre-Owned
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                    <label
                        htmlFor="dashboardDrawer"
                        tabIndex={2}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
