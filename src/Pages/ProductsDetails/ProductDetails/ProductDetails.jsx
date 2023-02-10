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
            <div className="product rounded-lg bg-base-200 shadow-md bg-bgColor w-[255px]">
                <div className="">
                    <img className=" rounded-sm mx-auto" src={img} alt="" />
                </div>
                <div className="text-center">
                    <div>
                        <h6 className="text-lg font-semibold my-2 uppercase">
                            {title}
                        </h6>
                    </div>
                    <div className="price">
                        <span className="text-xl font-bold my-4">
                            {" "}
                            {originalPrice} Tk
                        </span>
                    </div>
                    <div className="price">
                        <span className="text-xl font-bold my-4">
                            {seller?.name}
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
        </div>
    );
};

export default ProductDetails;
