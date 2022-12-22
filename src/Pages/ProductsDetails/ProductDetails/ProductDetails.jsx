import { MdVerified } from "react-icons/md";
const ProductDetails = ({ product, setItem }) => {
    const {
        title,
        img,
        location,
        resalePrice,
        originalPrice,
        yearsOfUse,
        postedTime,
        seller,
    } = product;
    return (
        <div className="flex justify-center">
            <div className="card w-96 glass ">
                <figure>
                    <img src={img} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p>Location: {location}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Years of Used: {yearsOfUse}</p>
                    <p>Posted Time: {postedTime}</p>
                    <p className="flex">
                        {" "}
                        <span> {seller?.name} </span>
                        <span className="ml-2">
                            {" "}
                            {seller?.verified && <MdVerified />}
                        </span>
                    </p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor="bookingModal"
                            onClick={() => setItem(product)}
                            className="btn btn-primary"
                        >
                            Book Now
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
