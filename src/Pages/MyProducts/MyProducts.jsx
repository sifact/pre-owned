import React, { useContext, useEffect, useState } from "react";

import MyProduct from "./MyProduct/MyProduct";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    // const [email, setEmail] = useState();
    useEffect(() => {
        fetch(
            `https://assignment-12-server-brown.vercel.app/addedProducts/${user?.email}`,
            {
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        "resellerToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [user?.email]);

    const handleDelete = (_id) => {
        const agree = window.confirm(
            "Are you sure you wanna delete this Product?"
        );

        if (agree) {
            fetch(
                `https://assignment-12-server-brown.vercel.app/addedProducts/${_id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast("Product Deleted Successfully");
                        const remainingReviews = products.filter(
                            (rev) => rev._id !== _id
                        );
                        setProducts(remainingReviews);
                    }
                });
        }
    };

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div className="my-32 container grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-2 justify-center ">
            {products.map((product) => {
                // setEmail(product.email);
                return (
                    <MyProduct
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    />
                );
            })}
        </div>
    );
};

export default MyProducts;
