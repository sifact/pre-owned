import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Buyers = () => {
    const { data: buyers = [], refetch } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/buyers");
            const data = await res.json();
            return data;
        },
    });

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/buyers/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem(
                    "resellerToken"
                )}`,
            },
        })
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
            fetch(`http://localhost:5000/buyer/delete/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Buyer Deleted Successfully");

                        refetch();
                    }
                });
        }
    };

    return (
        <div className="m-16">
            <h2 className="text-3xl mb-8">All Buyers</h2>
            <div className="overflow-x-auto w-full ">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {buyers.map((user, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {" "}
                                    {user?.role !== "admin" && (
                                        <Link
                                            onClick={() =>
                                                handleMakeAdmin(user._id)
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
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Buyers;
