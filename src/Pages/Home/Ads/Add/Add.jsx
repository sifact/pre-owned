import React from "react";

import Carousel from "react-elastic-carousel";
import { FaStar } from "react-icons/fa";

const Add = ({ product }) => {
    console.log(product);
    const {
        img,
        productName,
        resalePrice,
        meetingLocation,
        buyer,
        quality,
        originalPrice,
        yearsOfUse,
    } = product;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <div className="product rounded-lg bg-base-200 shadow-md bg-bgColor w-[255px]">
            <div className="">
                <img className=" rounded-sm mx-auto" src={img} alt="" />
            </div>
            <div className="text-center">
                <div>
                    <h6 className="text-lg font-semibold my-2 uppercase">
                        {productName}
                    </h6>
                </div>
                <div className="price">
                    <span className="text-xl font-bold my-4">
                        {" "}
                        {resalePrice} Tk
                    </span>
                </div>

                <div className="flex flex-col pb-2">
                    <button className="bg-primary py-2 my-4 inline-block hover:bg-secondary transition duration-700 ease-in-out">
                        Add To Cart
                    </button>
                    <button className="text-primary text-xl font-semibold">
                        Quick View
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Add;
