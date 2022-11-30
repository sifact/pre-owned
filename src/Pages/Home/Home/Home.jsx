import React from "react";
import About from "../About/About";
import Ads from "../Ads/Ads";

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Ads />
            <About />
        </div>
    );
};

export default Home;
