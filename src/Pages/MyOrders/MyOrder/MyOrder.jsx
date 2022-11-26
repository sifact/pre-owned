import React from "react";
// import { Link } from "react-router-dom";

const MyOrder = ({ order }) => {
    const { img, productName, resalePrice, meetingLocation, buyer } = order;

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
                    {/* <p>Years of Used: {yearsOfUse}</p> */}
                    {/* <p>Posted Time: {postedTime}</p> */}
                    {/* <p> {seller?.name}</p> */}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
