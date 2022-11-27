import React from "react";
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
    return (
        <section>
            <div className="flex justify-center">
                <div className="card w-96 glass ">
                    <figure>
                        <img src={img} alt="product!" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{productName}</h2>
                        <p>Meeting Location: {meetingLocation}</p>
                        <p>Original Price: {originalPrice}</p>
                        <p>Resale Price: {resalePrice}</p>
                        <p>Years of Used: {yearsOfUse}</p>
                        {/* <p>Posted Time: {postedTime}</p> */}
                        {/* <p> {seller?.name}</p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Add;
