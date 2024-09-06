import React from "react";
import img from '../src/Images/about.avif'
import CommonComp from "./CommonComp";
const About = () => {
  return (
    <>
    <CommonComp name='Welcome to About Page' imgsrc={img} visit='/contact' btnName='Contact Now' />
    </>
  );
};

export default About;
