import React from "react";

const TestimonialCard = ({ item }) => {
  const { name, image, carImage, comment, role } = item;
  return (
    <div className="mt-10">
      <div className="card w-96 shadow-xl">
        <div className="relative">
          <figure>
            <img className="w-full h-60 rounded-lg " src={carImage} alt="cars" />
          </figure>
          <div className="avatar absolute top-48 left-36">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={image} alt=""/>
            </div>
          </div>
        </div>
        <div className="card-body mt-10 text">
          <h2 className="text-2xl text-red-500 font-bold text-center">
            {name}
          </h2>
          <span className="bg-pink-500 w-32 mx-auto text-center font-bold text-white rounded-xl">{role}</span>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
