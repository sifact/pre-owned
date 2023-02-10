import React from "react";
import img from "../../../assets/banner/banner3.jpg";

const About = () => {
    return (
        <div className="hero bg-base-200 py-20 mb-20">
            <div className="container hero-content flex-col lg:flex-row">
                <img
                    src={img}
                    alt=""
                    className="lg:max-w-sm w-3/4 rounded-lg shadow-2xl"
                />
                <div>
                    <p className="py-6 lg:pl-20">
                        If you are looking to upgrade your laptop, you can get
                        some great deals here. Yes, the items are all used, but
                        because they are inspected before they are purchased
                        from the original owners, you know that you are getting
                        quality goods at the absolute lowest prices. If you
                        haven’t considered it before, definitely consider buying
                        your laptops used.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
