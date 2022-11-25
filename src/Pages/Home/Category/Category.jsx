import React from "react";
import { Link } from "react-router-dom";

const Category = ({ brand }) => {
    const { img, title } = brand;
    return (
        <div className="card card-compact  bg-base-100">
            <figure>
                <img src={img} className="rounded-full" alt="Shoes" />
            </figure>
            <div className="card-body">
                <Link className="text-3xl hover:text-primary text-center">
                    {title}
                </Link>
            </div>
        </div>
    );
};

export default Category;
