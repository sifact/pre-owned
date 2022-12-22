import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyProduct = ({ product, handleDelete }) => {
    const {
        img,
        productName,
        resalePrice,
        meetingLocation,
        buyer,
        quality,
        _id,
    } = product;

    const handleAdd = (product) => {
        console.log(product);

        fetch(`https://assignment-12-server-brown.vercel.app/advertise`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Advertise Successfully");
                }
            });
    };

    return (
        <div className="flex justify-center">
            <div className="card w-96 glass ">
                <figure>
                    <img src={img} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{productName}</h2>
                    <p>Location: {meetingLocation}</p>

                    <p>Resale Price: {resalePrice}</p>
                    <p>Buyer Name: {buyer}</p>
                    <p>Quality: {quality}</p>
                    <p>Status: Unsold</p>

                    <div className="card-actions justify-center my-4">
                        <button
                            onClick={() => handleAdd(product)}
                            className="btn btn-primary btn-sm"
                        >
                            Advertise
                        </button>
                    </div>

                    <div className="card-actions justify-center">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-sm"
                        >
                            delete
                        </button>
                    </div>

                    {/* <p>Years of Used: {yearsOfUse}</p> */}
                    {/* <p>Posted Time: {postedTime}</p> */}
                    {/* <p> {seller?.name}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MyProduct;
