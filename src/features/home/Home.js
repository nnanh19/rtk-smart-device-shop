import React from "react";
import Banner from "./banner/Banner";
import Catrgories from "./categories/Catrgories";
import Products from "./products/Products";

const Home = () => {
  return (
    <div className="">
      <div
        className="
        mb-3
        max-w-[1280px] 
        mx-auto 
        "
      >
        <div
          className="p-1
            flex
            flex-row
            items-start
            justify-center
            gap-8
            "
        >
          <Catrgories />
          <Banner />
        </div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
