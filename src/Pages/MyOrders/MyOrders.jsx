import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MyOrder from "./MyOrder/MyOrder";

const MyOrders = () => {
    const { data: orders = [] } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/bookings");
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="my-32 container grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-2 justify-center ">
            {orders.map((order) => (
                <MyOrder key={order._id} order={order} />
            ))}
        </div>
    );
};

export default MyOrders;
