import React, { useContext } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const BookingModal = ({ item, setItem, refetch }) => {
    const { user } = useContext(AuthContext);

    const { title, resalePrice } = item;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;

        const buyerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.location.value;

        const booking = {
            productName: title,
            buyer: buyerName,
            resalePrice,
            meetingLocation,
            email,
            phone,
        };
        console.log(booking);
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    setItem(null);
                    toast.success("appointment added");
                    // refetch();
                } else {
                    toast.error(data.message);
                }
            });
        // console.log(booking);
    };

    return (
        <div>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="bookingModal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold mb-12">{title}</h3>
                    {/* form */}

                    <form onSubmit={handleBooking} className="grid">
                        {/* <input
                            disabled
                            type="text"
                            value={title}
                            className="input input-bordered w-full mb-6"
                        /> */}
                        <input
                            disabled
                            type="text"
                            value={`Resale Price: ${resalePrice}`}
                            className="input input-bordered w-full mb-6"
                        />
                        {/* <select
                            name="slot"
                            className="select w-full input-bordered mb-6"
                        >
                            <option value={} key={idx}>
                                    {}
                                </option>
                        </select> */}
                        <input
                            type="text"
                            name="name"
                            readOnly
                            defaultValue={user?.displayName}
                            // placeholder="Your name"
                            className="input input-bordered w-full mb-6"
                        />
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            disabled
                            // placeholder="Your email"
                            className="input input-bordered w-full mb-6"
                        />
                        <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Your number"
                            className="input input-bordered w-full mb-6"
                        />
                        <input
                            type="text"
                            name="location"
                            placeholder="Meeting location"
                            className="input input-bordered w-full mb-6"
                        />

                        <input
                            className="btn btn-sm mt-8"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
