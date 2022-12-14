import React from 'react';
import { FaCheckCircle, FaStar, FaStarHalfAlt } from "react-icons/fa";


const AdCard = ({product}) => {
    const {
        brand,
        image_url,
        location,
        model,
        original_price,
        resale_price,
        seller_name,
        verified,
        years_of_use,
      } = product;
    return (
        <div className="card w-96 h-[500px] rounded-lg shadow-md">
        <figure>
          <img className="w-full h-60" src={image_url} alt="Shoes" />
        </figure>
        <div className="flex justify-center my-4 items-center text-xl text-yellow-400">
          <FaStar className="mr-3"></FaStar>
          <FaStar className="mr-3"></FaStar>
          <FaStar className="mr-3"></FaStar>
          <FaStar className="mr-3"></FaStar>
          <FaStarHalfAlt className="mr-3"></FaStarHalfAlt>
        </div>
        <div className="card-body font-bold">
          <h2 className="card-title">{model}</h2>
          <div className="flex justify-between">
            <div className="text-sm">
              <p>Brand: {brand}</p>
              <p>Location: {location}</p>
              <p>
                Seller: {seller_name}
                {verified && (
                  <span>
                    <FaCheckCircle className="text-blue-500 inline ml-2" />
                  </span>
                )}
              </p>
            </div>
            <div className="text-sm">
              <p>Original Price: ${original_price}</p>
              <p>Resale Price: ${resale_price}</p>
              <p>used for: {years_of_use}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AdCard;