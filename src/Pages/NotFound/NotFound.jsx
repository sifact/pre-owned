import React from "react";
import img from "../../assets/img/404.jpg";
const NotFound = () => {
    return (
        <div className="flex justify-center">
            <img src={img} style={{ width: "600px" }} alt="" />
        </div>
    );
};

export default NotFound;
