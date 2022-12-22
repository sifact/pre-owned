import React from "react";
import img1 from "../../../assets/banner/banner1.jpg";
import img2 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import "./Banner.css";

const Banner = () => {
    return (
        <section className="container">
            <div className="carousel w-full relative my-16">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="carousel-img">
                        {" "}
                        <img
                            src={img1}
                            alt="banner img"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className="lg:text-3xl md:text-2xl md:font-semibold font-bold text-white">
                            Buy Certified Pre-owned Gadgets <br />
                            <span className="text-2xl lg:block md:block sm:block hidden font-semibold text-primary">
                                Daily Deal, Free Shipping
                            </span>
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="carousel-img">
                        {" "}
                        <img
                            src={img2}
                            alt="banner img"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className="lg:text-3xl md:text-2xl md:font-semibold font-bold text-white">
                            Buy Certified Pre-owned Gadgets <br />
                            <span className="text-2xl lg:block md:block sm:block hidden font-semibold text-primary">
                                Daily Deal, Free Shipping
                            </span>
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="carousel-img">
                        {" "}
                        <img
                            src={img3}
                            alt="banner img"
                            className="w-full rounded-lg"
                        />
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-24 top-1/4">
                        <h1 className="lg:text-3xl md:text-2xl md:font-semibold font-bold text-white">
                            Buy Certified Pre-owned Gadgets <br />
                            <span className="text-2xl lg:block md:block sm:block hidden font-semibold text-primary">
                                Daily Deal, Free Shipping
                            </span>
                        </h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
