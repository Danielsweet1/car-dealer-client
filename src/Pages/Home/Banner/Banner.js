import React from "react";
import banner from '../../../images/banner-image.jpg'
import NavBar from "../../Shared/NavBar/NavBar";
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <div
        className=" min-h-screen"
        style={{ backgroundImage: `url(${banner})`,backgroundSize:'cover' }}
      >
        <NavBar/>
        <div className=" bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-0 md:mt-24">
            <p className="text-3xl font-semibold mb-4">We have Everything </p>
            <h1 className="mb-5 text-5xl body font-bold">Your Car Need</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
