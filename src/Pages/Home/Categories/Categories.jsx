import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "../Category/Category";

const Categories = () => {
    const { data: brands = [] } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await fetch(
                "https://assignment-12-server-brown.vercel.app/categories"
            );
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className="container mx-auto my-32">
            <h1 className="text-4xl text-center font-semibold mt-12 mb-24 text-white">
                | Major brands
            </h1>

            <div className="grid gap-6 grid-col-1 md:grid-cols-2 lg:grid-cols-3">
                {brands.map((brand) => (
                    <Category key={brand._id} brand={brand} />
                ))}
            </div>
        </div>
    );
};

export default Categories;
