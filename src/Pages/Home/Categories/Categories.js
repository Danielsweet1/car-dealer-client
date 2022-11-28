import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const { data: cars = [] } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const res = await fetch("https://car-dealer-server.vercel.app/category");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-20">
      <h3 className="text-4xl font-bold text-center">Second Hand Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {cars.map((car) => (
          <div className="w-80 mx-auto border p-4" key={car._id}>
            <img className="w-full h-48 border" src={car.image} alt="" />
            <div className="flex justify-center">
              <Link to={`/category/${car.brand}`}>
                <button className="btn bg-blue-500 w-40 mt-7 border-none hover:bg-blue-800">{car.brand}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
