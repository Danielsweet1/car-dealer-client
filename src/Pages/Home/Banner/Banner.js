import React from "react";
import banner from '../../../images/banner.jpg'

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p className="text-3xl font-semibold mb-4">Welcome to Our Stunning</p>
            <h1 className="mb-5 text-5xl  font-bold">Car Dealer Website</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
