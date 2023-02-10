import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal/BookingModal";
import ProductDetails from "./ProductDetails/ProductDetails";

const ProductsDetails = () => {
    const brand = useLoaderData();
    const [item, setItem] = useState(null);

    const { title, products } = brand;

    return (
        <div className="container mx-auto my-20 flex justify-center">
            <div>
                <h1 className="text-3xl my-12 text-center text-white font-bold">
                    | {title} collections
                </h1>
                <div className="grid gap-12 grid-cols-2 md:grid-col-3 lg:grid-cols-4 justify-center ">
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
        </div>
    );
};

export default ProductsDetails;
