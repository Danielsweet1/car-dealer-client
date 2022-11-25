import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../Shared/BookingModal/BookingModal";
import CarCard from "./CarCard";

const SpecificCategory = () => {
  
  const cars = useLoaderData();
  const [item, setItem]= useState(null)

  return (
    <div className="my-20 max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-center my-5">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} setItem={setItem}></CarCard>
        ))}
      </div>
      {
        item &&
        <BookingModal item={item} setItem={setItem}/>
      }
    </div>
  );
};

export default SpecificCategory;
