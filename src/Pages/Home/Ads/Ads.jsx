import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Add from "./Add/Add";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Ads = () => {
    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(
                "https://assignment-12-server-brown.vercel.app/advertise"
            );
            const data = await res.json();
            return data;
        },
    });
    return (
        <div className=" my-48">
            <h1 className="text-3xl my-28 text-center font-bold text-white">
                | Advertisements
            </h1>
            <Carousel breakPoints={breakPoints}>
                {products.map((product, idx) => (
                    <Add key={idx} product={product} />
                ))}
            </Carousel>
        </div>
    );
};

export default Ads;
