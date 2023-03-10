import React, { useContext, useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
import MyOrder from "./MyOrder/MyOrder";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // const { data: orders = [] } = useQuery({
    //     queryKey: ["orders", user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(
    //             `https://assignment-12-server-brown.vercel.app/bookings/${user?.email}`,
    //             {
    //                 headers: {
    //                     authorization: `bearer ${localStorage.getItem(
    //                         "resellerToken"
    //                     )}`,
    //                 },
    //             }
    //         );
    //         const data = await res.json();
    //         return data;
    //     },
    // });

    useEffect(() => {
        fetch(
            `https://assignment-12-server-brown.vercel.app/bookings/${user?.email}`,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        "resellerToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    return (
        <div className="my-32 container  ">
            <h2 className="text-3xl mb-8">My Orders</h2>
            <div className="overflow-x-auto w-full ">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Buyer</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Resale Price</th>
                            <th>Meeting Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => (
                            <MyOrder i={i} key={order._id} order={order} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
