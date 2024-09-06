import React from "react";
import img from '../src/Images/img.avif'
import CommonComp from "./CommonComp";
const Home = () => {
  return (
    <>
      <CommonComp
        name="Grow your business with"
        imgsrc={img}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;
