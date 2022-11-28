import React, { useContext } from "react";
import { FaStar, FaStarHalfAlt, FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";
import { useBuyer } from "../../hooks/useBuyer";

const CarCard = ({ car, setItem }) => {
  const { user } = useContext(AuthContext);
  const [isBuyer] = useBuyer(user?.email);
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
    sold,
  } = car;

  const report = {
    image: image_url,
    model: model,
    sellerName: seller_name,
    price: resale_price,
  };

  const handleReport = () => {
    fetch("https://car-dealer-server.vercel.app/reporteditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={`${sold ? "hidden" : "block"}`}>
      <div className={`card w-96 h-[500px] rounded-lg shadow-md `}>
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
          {isBuyer && (
            <button
              onClick={handleReport}
              className="btn btn-sm btn-outline block w-1/2 mx-auto"
            >
              Report
            </button>
          )}
          {!sold && isBuyer ? (
            <label
              onClick={() => setItem(car)}
              htmlFor="booking-modal"
              className="btn w-full mt-3 border-none bg-red-500 hover:bg-red-700"
            >
              Book Now
            </label>
          ) : (
            <label
              className="btn w-full mt-3 border-none bg-red-500 hover:bg-red-700"
              disabled={true}
            >
              Book Now
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
