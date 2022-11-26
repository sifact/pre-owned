import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Buyers = () => {
    const { data: buyers = [] } = useQuery({
        queryKey: ["buyers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/buyers");
            const data = await res.json();
            return data;
        },
    });

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
                                    <Link className="btn btn-sm">Delete</Link>
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
