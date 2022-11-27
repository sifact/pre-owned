import React from "react";
import { Link } from "react-router-dom";

const MyProduct = ({ product }) => {
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
                        <button className="btn btn-sm">delete</button>
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
