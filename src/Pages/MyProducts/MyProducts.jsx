import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import MyProduct from "./MyProduct/MyProduct";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    // const [email, setEmail] = useState();

    const { data: products = [] } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/addedProducts/${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });
    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div className="my-32 container grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-2 justify-center ">
            {products.map((product) => {
                // setEmail(product.email);
                return <MyProduct key={product._id} product={product} />;
            })}
        </div>
    );
};

export default MyProducts;
