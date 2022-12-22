import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const productName = form.name.value;
        console.log(productName);
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const phone = form.mobile.value;
        const location = form.location.value;
        const brand = form.category.value;
        const yearsOfUse = form.year.value;
        const description = form.textarea.value;
        const quality = form.quality.value;
        const img = form.photoURL.value;

        const addedProducts = {
            productName,
            img,
            sellerName: user?.displayName,
            resalePrice,
            originalPrice,
            phone,
            location,
            yearsOfUse,
            brand,
            description,
            quality,
            email: user?.email,
        };

        fetch(
            `https://assignment-12-server-brown.vercel.app/addedProducts/${brand}`,
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(addedProducts),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.ok) {
                    toast.success("Product Added");
                    navigate("/dashboard/addedProducts");
                }
            });
        fetch(`https://assignment-12-server-brown.vercel.app/addedProducts`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                // if (data.ok) {
                //     toast.success("Product Added");
                // }
            });
    };
    return (
        <div className="my-16 container">
            <div className="hero">
                <div className="w-full bg-base-100">
                    <form onSubmit={handleSubmit} className=" ">
                        <div className="flex gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Product Name
                                    </span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Product Name"
                                    // name="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        resalePrice
                                    </span>
                                </label>
                                <input
                                    name="resalePrice"
                                    type="text"
                                    placeholder="resalePrice"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    name="originalPrice"
                                    type="text"
                                    placeholder="OriginalPrice"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        <div className="flex gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input
                                    type="mobile"
                                    name="mobile"
                                    placeholder="mobile"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input
                                    name="location"
                                    type="location"
                                    placeholder="location"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Year of Purchase
                                    </span>
                                </label>
                                <input
                                    name="year"
                                    type="year"
                                    placeholder="year"
                                    className="input input-bordered"
                                />
                            </div>
                        </div>

                        <div className="flex gap-8">
                            <div className="from-control w-full">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select
                                    name="category"
                                    className="select w-full input-bordered mb-6"
                                >
                                    <option value="Asus" selected>
                                        Asus
                                    </option>
                                    <option value="Dell">Dell</option>
                                    <option value="HP">HP</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quality</span>
                                </label>
                                <select
                                    name="quality"
                                    className="select w-full input-bordered mb-6"
                                >
                                    <option value="excellent" selected>
                                        excellent
                                    </option>
                                    <option value="good">good</option>
                                    <option value="fair">fair</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">
                                        Description
                                    </span>
                                </label>
                                <textarea
                                    name="textarea"
                                    className="textarea input-bordered"
                                    placeholder="Description"
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photoURL"
                                type="text"
                                placeholder="photoURL"
                                className="input input-bordered"
                            />
                        </div>
                        <div className=" w-full flex justify-center mt-6">
                            <button className="btn btn-wide btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
