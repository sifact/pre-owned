import React from "react";
import Ads from "../Ads/Ads";

import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <Ads />
        </div>
    );
};

export default Home;
