import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductsDetails = () => {
    const brand = useLoaderData();
    const [item, setItem] = useState(null);

    const { title, products } = brand;

    return (
        <div className="container my-20">
            <h1 className="text-3xl my-12 text-center text-white">
                {title} collections
            </h1>
            <div className="grid gap-4 grid-cols-1 md:grid-col-2 lg:grid-cols-2 justify-center ">
                {products.map((product, idx) => (
                    <ProductDetails
                        key={idx}
                        product={product}
                        setItem={setItem}
                    />
                ))}
            </div>
            {item && <BookingModal item={item} setItem={setItem} />}
        </div>
    );
};

export default ProductsDetails;
