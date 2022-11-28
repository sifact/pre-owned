import React, { useContext, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MyOrder from "./MyOrder/MyOrder";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [] } = useQuery({
        queryKey: ["orders", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/bookings/${user?.email}`,
                {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            "resellerToken"
                        )}`,
                    },
                }
            );
            const data = await res.json();
            return data;
        },
    });

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
