import React from "react";
// import { Link } from "react-router-dom";

const MyOrder = ({ order, i }) => {
    const { img, productName, resalePrice, meetingLocation, buyer } = order;

    return (
        <tr>
            <th>{i + 1}</th>
            <td>{buyer}</td>
            <td>{productName}</td>
            <td>
                <img
                    style={{ width: "50px" }}
                    src={img}
                    alt=""
                    className="rounded-full"
                />
            </td>
            <td>{resalePrice}</td>
            <td>{meetingLocation}</td>
        </tr>
    );
};

export default MyOrder;
