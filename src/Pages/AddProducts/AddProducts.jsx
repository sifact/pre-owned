import React from "react";
import toast from "react-hot-toast";

const AddProducts = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const productName = form.name.value;
        console.log(productName);
        const price = form.price.value;
        const phone = form.mobile.value;
        const location = form.location.value;

        const addedProducts = {
            productName,
            price,
            phone,
            location,
        };
        console.log(addedProducts);
        fetch("http://localhost:5000/addedProducts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(addedProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Order Done");
                    // refetch();
                } else {
                    toast.error(data.message);
                }
            });
        // console.log(booking);
    };
    return (
        <div className="my-16 container">
            <div className="hero">
                <div className="w-full bg-base-100">
                    <form onSubmit={handleSubmit} className=" ">
                        <div className="flex gap-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    // defaultValue="test"

                                    placeholder="name"
                                    // name="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    name="price"
                                    type="price"
                                    placeholder="price"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Quality</span>
                                </label>
                                <select
                                    name="quality"
                                    className="select w-full input-bordered mb-6"
                                >
                                    <option value="user" selected>
                                        excellent
                                    </option>
                                    <option value="seller">good</option>
                                    <option value="seller">fair</option>
                                </select>
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
                                    <option value="user" selected>
                                        Asus
                                    </option>
                                    <option value="seller">Dell</option>
                                    <option value="seller">HP</option>
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
