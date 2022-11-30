import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Add from "./Add/Add";

const Ads = () => {
    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/advertise");
            const data = await res.json();
            return data;
        },
    });
    return (
        <div className="container my-20">
            <h1 className="text-3xl my-12 text-center text-white">
                Advertisements
            </h1>
            <div className="grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-2 justify-center ">
                {products.map((product, idx) => (
                    <Add key={idx} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Ads;
