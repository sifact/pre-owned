import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Sellers = () => {
    // const [sellers, setSellers] = useState([]);

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ["sellers"],
        queryFn: async () => {
            const res = await fetch(
                "https://assignment-12-server-brown.vercel.app/sellers"
            );
            const data = await res.json();
            return data;
        },
    });

    const handleMakeAdmin = (id) => {
        fetch(
            `https://assignment-12-server-brown.vercel.app/sellers/admin/${id}`,
            {
                method: "PUT",
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        "resellerToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Make Admin Successfully");
                    refetch();
                }
            });
    };

    const handleDelete = (_id) => {
        const agree = window.confirm(
            "Are you sure you wanna delete this Product?"
        );

        if (agree) {
            fetch(
                `https://assignment-12-server-brown.vercel.app/seller/delete/${_id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Seller Deleted Successfully");
                        // const remainingReviews = sellers.filter(
                        //     (rev) => rev._id !== _id
                        // );
                        // setSellers(remainingReviews);
                        refetch();
                    }
                });
        }
    };

    return (
        <div className="m-16">
            <h2 className="text-3xl mb-8">All Sellers</h2>
            <div>
                <div className="overflow-x-auto w-full ">
                    <table className="table table-zebra w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                {/* <th></th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {sellers.map(
                                (user, i) =>
                                    user?.role !== "admin" && (
                                        <tr key={i}>
                                            {/* <th>{i + 1}</th> */}
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>
                                                {" "}
                                                {user?.role !== "admin" && (
                                                    <Link
                                                        onClick={() =>
                                                            handleMakeAdmin(
                                                                user._id
                                                            )
                                                        }
                                                        className="btn btn-sm"
                                                    >
                                                        Admin
                                                    </Link>
                                                )}{" "}
                                            </td>
                                            <td>
                                                <Link
                                                    className="btn btn-sm"
                                                    onClick={() =>
                                                        handleDelete(user._id)
                                                    }
                                                >
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Sellers;
