import React from "react";
import { Link } from "react-router-dom";

const Category = ({ brand }) => {
    const { img, title, _id } = brand;
    // console.log(_id);
    return (
        <div className="card card-compact  bg-base-100">
            <figure>
                <img src={img} className="rounded-full" alt="Shoes" />
            </figure>
            <div className="card-body">
                <Link
                    to={`/category/${_id}`}
                    className="text-3xl hover:text-primary text-center"
                >
                    {title}
                </Link>
            </div>
        </div>
    );
};

export default Category;
